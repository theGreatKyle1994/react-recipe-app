import React, { useState } from "react";
import "./RecipeModal.css";
import RecipeModalHeader from "./RecipeModalHeader";
import RecipeModalInfoTitle from "./RecipeModalInfoTitle";
import RecipeModalCalories from "./RecipeModalCalories";
import RecipeModalMacros from "./RecipeModalMacros";
import RecipeModalIngredients from "./RecipeModalIngredients";

const RecipeTileModal = (props) => {
  const [dropDown, setDropDown] = useState({
    calorieDropDown: true,
    macroDropDown: true,
    ingredientDropDown: true,
  });

  const xIcon = (
    <svg
      onClick={props.modalHandler}
      className={"modal-exit"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
    </svg>
  );

  const toggleDropDown = (name) => {
    setDropDown((prev) => {
      return {
        ...prev,
        [name]: !prev[name],
      };
    });
  };

  return (
    <section
      onClick={props.modalHandler}
      className={"modal-container"}
      style={{ zIndex: 1 }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={!props.animState ? "modal" : "modal-exit-anim"}
        onAnimationEnd={() => {
          if (props.animState) props.onAnimEnd();
        }}
      >
        {xIcon}
        <RecipeModalHeader modalData={props.modalData} />
        <section className={"modal-body"}>
          <RecipeModalInfoTitle
            toggle={() => toggleDropDown("calorieDropDown")}
            text={
              !dropDown.calorieDropDown
                ? "+ Calories | Weight +"
                : "- Calories | Weight -"
            }
          />
          {dropDown.calorieDropDown && (
            <RecipeModalCalories modalData={props.modalData} />
          )}
          <RecipeModalInfoTitle
            toggle={() => toggleDropDown("macroDropDown")}
            text={!dropDown.macroDropDown ? "+ Macros +" : "- Macros -"}
          />
          {dropDown.macroDropDown && (
            <RecipeModalMacros modalData={props.modalData} />
          )}
          <RecipeModalInfoTitle
            toggle={() => toggleDropDown("ingredientDropDown")}
            text={
              !dropDown.ingredientDropDown
                ? "+ Ingredients +"
                : "- Ingredients -"
            }
          />
          {dropDown.ingredientDropDown && (
            <RecipeModalIngredients modalData={props.modalData} />
          )}
        </section>
      </div>
    </section>
  );
};

export default RecipeTileModal;
