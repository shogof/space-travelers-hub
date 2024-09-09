import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missions.missions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = useSelector((state) => state.missions.reservedMissions);
  const reservedMissionsList = missions.filter((mission) => reservedMissions.includes(mission.id));

  return (
    <div className="border-purple-500 border-2 w-2/4 mx-auto p-8 h-auto">
      <h1 className="text-5xl mb-8 text-center">My Profile</h1>
      <div className="mb-8 border-purple-600 border-2 py-4 outline-double">
        <h2 className="text-3xl mb-4 text-center">My Rockets</h2>
        <ul>
          {reservedRockets.length > 0 ? (
            reservedRockets.map((rocket) => (
              <li
                key={rocket.id}
                className="border-fuchsia-500 border-2 w-4/5 mx-auto p-3 my-6"
              >
                {rocket.name}
              </li>
            ))
          ) : (
            <li className="text-2xl text-center font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent py-5">
              No reserved rockets
            </li>
          )}
        </ul>
      </div>
      <div className="border-purple-900 outline-double border-2 py-4">
        <h2 className="text-3xl mb-4 text-center">My Missions</h2>
        <ul>
          {reservedMissionsList.length > 0 ? (
            reservedMissionsList.map((mission) => (
              <li
                key={mission.id}
                className="border-fuchsia-500 border-2 w-4/5 mx-auto p-3 my-6"
              >
                {mission.mission_name}
              </li>
            ))
          ) : (
            <li className="text-2xl text-center font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent  py-5">
              No reserved missions
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
