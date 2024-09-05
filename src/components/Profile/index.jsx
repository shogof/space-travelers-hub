import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const reservedMissions = useSelector((state) => state.missions.reservedMissions);

  return (
    <div className="border-purple-500 border-2 w-2/4 mx-auto p-8 h-auto">
      <h1 className="text-4xl mb-8 text-center">My Missions</h1>
      <ul>
        {reservedMissions.length > 0 ? (
          reservedMissions.map((missionId) => (
            <li
              key={missionId}
              className="border-fuchsia-500 border-2 w-4/5 mx-auto p-3 my-6"
            >
              {/* Fetch mission details from the state based on missionId */}
              {missionId}
            </li>
          ))
        ) : (
          <li className="text-3xl text-center font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            No reserved missions
          </li>
        )}
      </ul>
    </div>
  )
}

export default MyProfile;
