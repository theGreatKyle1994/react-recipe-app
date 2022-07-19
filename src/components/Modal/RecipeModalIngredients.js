import "./RecipeModalIngredients.css";
import RecipeModalInfo from "./RecipeModalInfo";

const RecipeModalIngredients = (props) => {
  const currentIngredients = props.modalData.ingredients.map((ingredient) => {
    return (
      <RecipeModalInfo
        key={Math.random()}
        title={ingredient.food}
        image={ingredient.image}
      />
    );
  });

  return (
    <section className={"modal-ingredients-container"}>
      {currentIngredients}
    </section>
  );
};

export default RecipeModalIngredients;
