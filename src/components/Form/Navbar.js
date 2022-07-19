import "./Navbar.css";
import RecipeForm from "./RecipeForm";
import ButtonStandard from "../UI/ButtonStandard";

const Navbar = (props) => {
  return (
    <div className={"nav-main-container"}>
      <h1 className={"nav-title"}>
        <a
          href={"https://github.com/theGreatKyle1994?tab=repositories"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          @Recipes
        </a>
      </h1>
      <RecipeForm
        setModal={props.setModal}
        setRecipeList={props.setRecipeList}
      />
      <div className={"nav-right-container"}>
        <ButtonStandard
          source={"https://github.com/theGreatKyle1994?tab=repositories"}
          text={"My Github"}
        />
      </div>
    </div>
  );
};

export default Navbar;
