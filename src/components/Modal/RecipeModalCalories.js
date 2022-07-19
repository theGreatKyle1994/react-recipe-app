import RecipeModalInfo from "./RecipeModalInfo";
import "./RecipeModalCalories.css";

const RecipeModalCalories = (props) => {
  return (
    <section className={"modal-calories-container"}>
      <RecipeModalInfo
        title={"Calories:"}
        trueValue={parseInt(props.modalData.calories)}
      />
      <RecipeModalInfo title={"Servings:"} trueValue={props.modalData.yield} />
      <RecipeModalInfo
        title={"Calories/Serving:"}
        trueValue={parseInt(
          parseInt(props.modalData.calories) / parseInt(props.modalData.yield)
        )}
      />
      <RecipeModalInfo
        title={"Weight:"}
        trueValue={`${parseInt(props.modalData.totalWeight)}g`}
      />
    </section>
  );
};

export default RecipeModalCalories;
