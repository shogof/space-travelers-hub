
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dragon from './DragonsPart';
import { fetchDragons } from '../../redux/Dragons/DragonsSlice.js';

function Dragons() {
  const dispatch = useDispatch();
  const {
    dragons = [],
    isLoading,
    error,
  } = useSelector((store) => store.dragons || {});

  useEffect(() => {
    dispatch(fetchDragons());
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
      {!isLoading && !error && dragons.length === 0 && (
        <p>No dragons available</p>
      )}
      {dragons.map((item, index) => (
        <Dragon
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image || 'path/to/default-image.jpg'} // Provide default image
          description={item.description}
          reserved={item.reserved}
          count={index}
        />
      ))}
    </div>
  );
}

export default Dragons;
