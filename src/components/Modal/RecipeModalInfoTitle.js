import "./RecipeModalInfoTitle.css";

const RecipeModalInfoTitle = (props) => {
  return (
    <h3 onClick={props.toggle} className={"modal-info-title"}>
      {props.text}
    </h3>
  );
};

export default RecipeModalInfoTitle;
