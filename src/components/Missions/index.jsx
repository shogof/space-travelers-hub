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
    <div className="flex flex-col border-2 m-10 ">
      <div className="missions-table-row head">
        <div className="missions-table-cell mission-name">Mission</div>
        <div className="missions-table-cell description">Description</div>
        <div className="missions-table-cell status">Status</div>
        <div className="missions-button-cell" />
      </div>
      {missions.map((mission) => (
        <div key={mission.id} className="missions-table-row">
          <div className="missions-table-cell mission-name">
            {mission.mission_name}
          </div>
          <div className="missions-table-cell description">
            {mission.description}
          </div>
          <div className="missions-table-cell status">
            {reservedMissions.includes(mission.id) ? (
              <span className="acmembership">Active member</span>
            ) : (
              <span className="membership">Not a member</span>
            )}
          </div>
          <div className="missions-table-cell button">
            {reservedMissions.includes(mission.id) ? (
              <button onClick={() => handleLeaveMission(mission.id)} className="leave-button" type="submit">
                Leave Mission
              </button>
            ) : (
              <button onClick={() => handleJoinMission(mission.id)} className="join-button" type="submit">
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
