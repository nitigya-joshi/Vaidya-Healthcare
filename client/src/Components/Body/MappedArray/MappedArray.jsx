import React from "react";

function MappedArray(props) {
  const { array } = props;

  const arrayrow = array?.map((prop) => props.children({ prop }));

  return <>{arrayrow}</>;
}
export default MappedArray;
