import React, { useState } from "react";
import "./RecipeForm.css";
import ButtonStandard from "../UI/ButtonStandard";

const RecipeForm = (props) => {
  const [searchRecipe, setSearchRecipe] = useState({
    search: "",
    random: false,
  });

  //Grab recipe list from api and assign it to state
  const getRecipeList = async () => {
    //Formatting the input value to a url readable string
    const formattedSearch = searchRecipe.search
      .trim()
      .replace(/ +(?= )/g, "")
      .replaceAll(" ", "%20");

    const options = {
      headers: {
        "content-type": "application/json",
      },
    };

    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=d5bbd3d6&app_key=aeb31d8db215a603e628682ba2beedc9&q=${formattedSearch}&random=${searchRecipe.random}`,
        options
      );
      const data = await res.json();
      props.setRecipeList(data);
    } catch (error) {
      throw error(error);
    }

    props.setModal();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    getRecipeList();
  };

  const searchHandler = (event) => {
    const { value, name, checked, type } = event.target;
    setSearchRecipe((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form className={"form-container"} onSubmit={submitHandler}>
      <div className={"form-search-container"}>
        <input
          className={"form-search"}
          placeholder={"Search for recipes..."}
          name={"search"}
          value={searchRecipe.search}
          onChange={searchHandler}
          autoComplete={"off"}
        />
        <ButtonStandard text={"Search!"} />
      </div>
      <div className={"random-container"} >
        <input
          className={"form-random-input"}
          id={"form-random"}
          type={"checkbox"}
          checked={searchRecipe.random}
          name={"random"}
          onChange={searchHandler}
        />
        <label className={"form-random-label"} htmlFor={"form-random"}>
          Random Results
        </label>
      </div>
    </form>
  );
};

export default RecipeForm;
