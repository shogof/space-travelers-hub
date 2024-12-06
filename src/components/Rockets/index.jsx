import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './RockItem';
import { fetchRockets } from '../../redux/Rockets/RocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const { rockets, isLoading, error } = useSelector((store) => store.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="w-full p-5 flex flex-col mb-14">
      {isLoading && <p>Loading...</p>}
      {error && (
        <p>
          Error:
          {error}
        </p>
      )}
      {!isLoading && !error && rockets.length === 0 && (
        <p>No rockets available</p>
      )}
      {rockets.map((item, index) => (
        <Rocket
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
          reserved={item.reserved}
          count={index}
        />
      ))}
    </div>
  );
}

export default Rockets;
