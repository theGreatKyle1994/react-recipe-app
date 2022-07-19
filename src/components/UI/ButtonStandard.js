import "./ButtonStandard.css";

const ButtonStandard = (props) => {
  return (
    <a href={props.source} target={"_blank"} rel={"noreferrer"}>
      <button className={"btn"} type={props.type}>
        {props.text}
      </button>
    </a>
  );
};

export default ButtonStandard;
