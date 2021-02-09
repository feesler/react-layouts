

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <button className="icon-switch" onClick={onSwitch}>
      <span className="material-icons">{icon}</span>
    </button>
  )
}
