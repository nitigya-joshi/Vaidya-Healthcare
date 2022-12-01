import Option from "./Option";

function OptionsContainer(props) {
  return (
    <div
      className={
        props.isSearchBox
          ? props.className["options-container"] +
            (props.isActiveOptions ? " " + props.className["active"] : "")
          : props.className["options-container-no-search"] +
            (props.isActiveOptions ? " " + props.className["active"] : "")
      }
    >
      {props.options.length > 0 && props.options[0].id !== "" ? (
        props.options.map((option) => {
          return (
            <Option
              key={option.id}
              optionsHandler={props.optionsHandler}
              className={props.className}
              onChange={props.onChange}
              {...option}
            />
          );
        })
      ) : (
        <div className={props.className["not-found"]}>
          <label>No Options Available !!!</label>
        </div>
      )}
    </div>
  );
}

export default OptionsContainer;
