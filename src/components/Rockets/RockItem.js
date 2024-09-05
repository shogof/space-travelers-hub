import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelBooking } from '../../redux/Rockets/RocketsSlice';

function RocketsItem({
  id, name, image, description, reserved, count,
}) {
  const dispatch = useDispatch();
  const prefixedId = `rocket-${id}`;

  const handleReservation = () => {
    if (reserved) {
      dispatch(cancelBooking(id));
      const animation = document.querySelector(`.${prefixedId}`);
      if (animation) {
        animation.textContent = '';
        animation.classList.remove('rocketAnimation');
      }
    } else {
      dispatch(reserveRocket(id));
      const animation = document.querySelector(`.${prefixedId}`);
      if (animation) {
        animation.textContent = '🚀';
        animation.classList.add('rocketAnimation');
      }
    }
  };

  return (
    <div>
      <div>
        <img alt={name} src={image} />
      </div>
      <div>
        <h2>{name}</h2>
        <span>
          {reserved ? 'Reserved' : 'Available'}
        </span>
        <p>{description}</p>
        <button
          type="button"
          onClick={handleReservation}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
        <span className={`rocketAnimation ${prefixedId}`} />
      </div>
      <hr />
    </div>
  );
}

RocketsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
  count: PropTypes.number.isRequired,
};

RocketsItem.defaultProps = {
  reserved: false,
};

export default RocketsItem;
