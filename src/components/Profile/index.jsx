import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h1>My Rockets</h1>
      <ul>
        {reservedRockets.length > 0 ? (
          reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))
        ) : (
          <li>No reserved rockets</li>
        )}
      </ul>
    </div>
  );
}

export default MyProfile;
