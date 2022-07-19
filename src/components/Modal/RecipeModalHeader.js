import "./RecipeModalHeader.css";

const RecipeModalHeader = (props) => {
  return (
    <header
      className={"modal-header"}
      style={{
        backgroundImage: `url(${props.modalData.images.REGULAR.url})`,
      }}
    >
      <a
        className={"modal-title"}
        href={props.modalData.url}
        target="_blank"
        rel="noreferrer"
      >
        {props.modalData.label}
      </a>
      <p className={"modal-title-source"}>
        Get Recipe on: {props.modalData.source}
      </p>
    </header>
  );
};

export default RecipeModalHeader;
