import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { dragons } = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <div className="border-purple-500 border-2 w-2/4 mx-auto p-8 h-auto">
      <h1 className="text-4xl mb-8 text-center">My Dragons</h1>
      <ul>
        {reservedDragons.length > 0 ? (
          reservedDragons.map((dragon) => (
            <li
              key={dragon.id}
              className="border-fuchsia-500 border-2 w-4/5 mx-auto p-3 my-6"
            >
              {dragon.name}
            </li>
          ))
        ) : (
          <li className="text-3xl text-center font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            No reserved dragons
          </li>
        )}
      </ul>
    </div>
  );
}

export default MyProfile;