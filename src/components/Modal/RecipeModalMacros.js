import "./RecipeModalMacros.css";
import RecipeModalInfo from "./RecipeModalInfo";

const RecipeModalMacros = (props) => {
  return (
    <section className={"modal-macros-container"}>
      <RecipeModalInfo
        title={props.modalData.totalNutrients.CHOCDF.label}
        trueValue={`${parseInt(
          props.modalData.totalNutrients.CHOCDF.quantity
        )}g`}
        blipColor="green"
      />
      <RecipeModalInfo
        title={props.modalData.totalNutrients.PROCNT.label}
        trueValue={`${parseInt(
          props.modalData.totalNutrients.PROCNT.quantity
        )}g`}
        blipColor="red"
      />
      <RecipeModalInfo
        title={props.modalData.totalNutrients.FAT.label}
        trueValue={`${parseInt(props.modalData.totalNutrients.FAT.quantity)}g`}
        blipColor="orange"
      />
    </section>
  );
};

export default RecipeModalMacros;
