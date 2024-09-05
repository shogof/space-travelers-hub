import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const selectReservedRockets = (state) => state.rockets.rockets.filter((rocket) => rocket.reserved);
  const selectReservedMissions = (state) => state.missions.reservedMissions.map((missionId) => state.missions.missions.find((mission) => mission.id === missionId));

  const reservedRockets = useSelector(selectReservedRockets);
  const reservedMissions = useSelector(selectReservedMissions);

  return (
    <div className="profiles">
      <div className="rockets">
        <h2>My Rockets</h2>
        <table className="rocket-table">
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.rocket_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="missions">
        <h2>My Missions</h2>
        <table className="rocket-table">
          <tbody>
            {reservedMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
