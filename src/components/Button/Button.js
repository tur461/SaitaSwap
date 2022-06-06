import "./Button.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      title={props.title}
      className={`btn buttonStyle ${props.className}`}
      disabled={props.disabled}
    >
      {props.title} <img src={props.icon} alt={"icon"} />
    </button>
  );
};

export default Button;
