import RecipeTile from "./RecipeTile";
import "./RecipeCollection.css";

const RecipeCollection = (props) => {
  const recipeTileArr = props.recipeList.hits.map((recipe) => {
    const currentRecipe = recipe.recipe;

    //Update modal display and transfer specific recipe data
    const updateModal = () => {
      props.modalHandler(true);
      props.modalData(currentRecipe);
    };

    return (
      <RecipeTile
        clickHandler={updateModal}
        key={Math.random()}
        recipeInfo={currentRecipe}
      />
    );
  });

  return <div className={"tile-collection-container"}>{recipeTileArr}</div>;
};

export default RecipeCollection;
