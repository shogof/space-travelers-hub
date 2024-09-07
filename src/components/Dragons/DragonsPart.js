import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelBooking } from '../../redux/Dragons/DragonsSlice';

function DragonsPart({
  id, name, image, description, reserved, count,
}) {
  const dispatch = useDispatch();
  const prefixedId = 'dragon-$'{id}; 

  const handleReservation = () => {
    if '(reserved)' {
      dispatch(cancelBooking(id));
      const animation = document.querySelector('.${prefixedId}'); 
      if (animation) {
        animation.textContent = '';
        animation.classList.remove('dragonAnimation');
      }
    } else {
      dispatch(reserveDragon(id));
      const animation = document.querySelector(.${prefixedId}); 
      if (animation) {
        animation.textContent = '🔥';
        animation.classList.add('dragonAnimation');
      }
    }
  };

  return (
    <div
      className={
        count % 2 === 0
          ? 'flex flex-col h-auto items-center sm:flex-row w-5/6 mx-auto my-0 mt-8 flex-wrap sm:h-screen'
          : 'flex h-auto items-center w-5/6 mx-auto my-0 mt-8 flex-wrap flex-row-reverse pl-10 sm:h-screen sm:pl-0'
      }
    >
      <div className="w-full h-auto sm:w-3/5 sm:h-4/5">
        <img
          className="mx-auto my-0 w-full sm:w-4/5 p-2.5 sm:p-0 block rounded-3xl sm:h-3/4 min-w-28 sm:text-justify transition-transform duration-300 ease-in-out transform hover:scale-105"
          alt={name}
          src={image || 'path/to/default-image.jpg'}
        />
      </div>
      <div className="w-full p-2.5 text-center sm:text-justify sm:w-2/5 sm:h-4/5 flex flex-col justify-start items-center sm:px-3 sm:py-0">
        <h2 className="mb-12 text-white text-3xl uppercase font-bold font-sans">
          {name}
        </h2>
        <span
          className={
            reserved
              ? 'font-mono w-28 p-2 rounded-md mb-4 text-center -top-2 bg-purple-600 relative'
              : 'hidden'
          }
        >
          {reserved ? 'Reserved' : 'Available'}
        </span>
        <p className="mb-5 text-lg sm:mb-10 sm:text-xl text-justify font-sans">
          {description}
        </p>
        <button
          type="button"
          className={
            reserved
              ? 'w-full sm:w-52 bg-transparent rounded-md text-lg border-2 border-solid border-violet-600 shadow-md transition-all duration-300 hover:border-fuchsia-500 py-3'
              : 'w-full text-lg sm:w-44 bg-purple-600 border-0 rounded-md h-12 shadow-lg shadow-fuchsia-900 font-mono sm:text-xl cursor-pointer font-medium active:translate-x-px active:translate-y-px transition-all duration-300 hover:bg-fuchsia-500 hover:shadow-purple-800 hover:text-white overflow-hidden'
          }
          onClick={handleReservation}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
        </button>
        <span className={dragonAnimation ${prefixedId}} /> {/* استفاده از backticks */}
      </div>
      <hr className="h-0.5 text-white w-5/6 mx-auto my-0" />
    </div>
  );
}

DragonsPart.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  count: PropTypes.number.isRequired,
};

DragonsPart.defaultProps = {
  reserved: false,
};

export default DragonsPart;