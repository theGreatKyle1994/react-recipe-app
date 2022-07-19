import "./RecipeTile.css";

const RecipeTile = (props) => {
  return (
    <div
      onClick={props.clickHandler}
      className={"tile-container"}
      style={{
        backgroundImage: `url(${props.recipeInfo.images.REGULAR.url})`,
      }}
    >
      <h2 className={"tile-title"}>{props.recipeInfo.label}</h2>
      <section className={"tile-info-container"}>
        <span className={"tile-info"}>
          <div className={"tile-calories-info"}>Calories</div>
          <div className={"tile-calories"}>
            {parseInt(props.recipeInfo.calories)}
          </div>
        </span>
        <span className={"tile-info"}>
          <div className={"tile-ingredients"}>
            {props.recipeInfo.ingredientLines.length}
          </div>
          <div className={"tile-ingredients-info"}>Ingredients</div>
        </span>
      </section>
    </div>
  );
};

export default RecipeTile;
