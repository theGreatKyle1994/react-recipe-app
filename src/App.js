import React, { useState } from "react";
import "./App.css";
import RecipeCollection from "./components/RecipeCollection";
import Navbar from "./components/Form/Navbar";
import RecipeModal from "./components/Modal/RecipeModal";

const App = () => {
  const [render, setRender] = useState({
    renderList: false,
    renderModal: false,
  });
  const [recipeList, setRecipeList] = useState({});
  const [modalData, setModalData] = useState({});
  const [animState, setAnimState] = useState(false);

  //Render modal display from specific tile or remove from click away
  const setModal = (clicked) => {
    setRender((prev) => {
      return {
        ...prev,
        renderList: true,
        renderModal: clicked ? true : false,
      };
    });
  };

  return (
    <>
      {render.renderModal && (
        <RecipeModal
          modalData={modalData}
          modalHandler={() => setAnimState(true)}
          animState={animState}
          onAnimEnd={() => {
            if (render.renderModal) {
              setModal(false);
              setAnimState(false);
            }
          }}
        />
      )}
      <Navbar setRecipeList={setRecipeList} setModal={setModal} />
      {render.renderList ? (
        <RecipeCollection
          modalData={setModalData}
          modalHandler={setModal}
          recipeList={recipeList}
        />
      ) : (
        <section className={"welcome-screen"}>
          Search any recipe to get started...
        </section>
      )}
    </>
  );
};

export default App;
