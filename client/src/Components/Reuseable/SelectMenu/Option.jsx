function Option(props) {
  return (
    <div
      className={props.className["option"]}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.target = event.target.querySelector("input");
          props.onChange(event);
        }
        return props.optionsHandler(props.label);
      }}
    >
      <input
        id={props.id}
        type="radio"
        className={props.className["radio"]}
        name={props.name}
        value={props.label}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default Option;
