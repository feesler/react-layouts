import PropTypes from 'prop-types';

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <button className="icon-switch" onClick={onSwitch}>
      <span className="material-icons">{icon}</span>
    </button>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
