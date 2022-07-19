import "./RecipeModalInfo.css";

const RecipeModalInfo = (props) => {
  return (
    <div className={"info-container"}>
      {props.blipColor && (
        <div
          style={{
            backgroundColor: props.blipColor,
          }}
          className={"info-blipColor"}
        />
      )}
      <h3 className={"info-title"}>{props.title}</h3>
      {props.image && (
        <img className={"info-image"} src={props.image} alt={"icon"} />
      )}
      {props.trueValue && <p className={"info-value"}>{props.trueValue}</p>}
    </div>
  );
};

export default RecipeModalInfo;
