import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissionsData, reserveMission, leaveMission } from '../../redux/missions/MissionSlice';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const reservedMissions = useSelector((state) => state.missions.reservedMissions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissionsData());
    }
  }, [dispatch, missions.length]);

  const handleJoinMission = (missionId) => {
    dispatch(reserveMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <div>
      <div className="grid grid-cols-12 border border-black auto-cols-min font-bold text-xl">
        <div className="p-2 border-r-black col-span-2 border-r text-3xl">Mission</div>
        <div className="hidden md:block p-2 border-r-black col-span-6 border-r">
          Description
        </div>
        <div className="hidden md:block p-2 border-r-black col-span-2 border-r">
          Status
        </div>
        <div className="hidden md:block p-2 col-span-2">Actions</div>
      </div>

      {missions.map((mission, index) => (
        <div
          key={mission.id}
          className={`md:grid grid-cols-12 border border-t-0 border-black text-white ${
            index % 2 === 0 ? 'bg-purple-400' : ''
          }`}
        >
          <div className="border-r border-r-black p-2 text-xl text-white font-bold col-span-2">
            {mission.mission_name}
          </div>
          <div className="border-r border-r-black p-2 col-span-6 text-white">
            {mission.description}
          </div>
          <div className="border-r border-r-black p-2 col-span-2 grid place-content-center">
            {reservedMissions.includes(mission.id) ? (
              <span
                className={`border rounded-md px-2 py-1 text-white ${
                  index % 2 === 0 ? 'bg-purple-400' : ''
                }${
                  reservedMissions.includes(mission.id)
                    ? 'bg-fuchsia-500'
                    : 'bg-neutral-600 uppercase'
                }`}
              >
                Active member
              </span>
            ) : (
              <span className="border rounded-md px-2 py-1 text-white bg-neutral-600 uppercase">
                Not a member
              </span>
            )}
          </div>
          <div className="grid p-2 col-span-2 place-content-center">
            {reservedMissions.includes(mission.id) ? (
              <button
                onClick={() => handleLeaveMission(mission.id)}
                className="text-gray-100 border-fuchsia-500 border-2 rounded-md px-3 py-2"
                type="submit"
              >
                Leave Mission
              </button>
            ) : (
              <button
                onClick={() => handleJoinMission(mission.id)}
                className="grid p-2 col-span-2 place-content-center"
                type="submit"
              >
                Join Mission
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Missions;
