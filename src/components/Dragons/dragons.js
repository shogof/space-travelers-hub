import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons, reserveDragon } from '../redux/dragons/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons, status, error } = useSelector((state) => state.dragons);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  const handleReserve = (id) => {
    dispatch(reserveDragon(id));
  };

  if (status === 'loading') {
    return <p>Loading dragons...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Dragons</h2>
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            <h3>{dragon.name}</h3>
            <p>Type: {dragon.type}</p>
            <img src={dragon.flickr_images[0]} alt={dragon.name} style={{ width: '300px' }} />
            <button type="button" onClick={() => handleReserve(dragon.id)}>
              {dragon.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
            </button>
            {dragon.reserved && <span>Reserved</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dragons;