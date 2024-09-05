import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="border-purple-500 border-2 w-2/4 mx-auto p-8 h-auto ">
      <h1 className="text-4xl mb-8 text-center">My Rockets</h1>
      <ul>
        {reservedRockets.length > 0 ? (
          reservedRockets.map((rocket) => (
            <li
              key={rocket.id}
              className=" border-fuchsia-500 border-2 w-4/5 mx-auto p-3 my-6"
            >
              {rocket.name}
            </li>
          ))
        ) : (
          <li className="text-3xl text-center font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            No reserved rockets
          </li>
        )}
      </ul>
    </div>
  );
}

export default MyProfile;
"ira da chatgpt bendaz k baret ba code khodet ayarsh kna"