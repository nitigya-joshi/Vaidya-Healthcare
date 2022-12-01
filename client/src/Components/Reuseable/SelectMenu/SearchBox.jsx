import React, { forwardRef } from "react";

const SearchBox = forwardRef((props, ref) => {
  return (
    <div className={props.className["search-box"]}>
      <input
        type="text"
        placeholder="Search..."
        value={props.searchTerm}
        onChange={(event) => props.onChange(event.target.value)}
        ref={ref}
      />
    </div>
  );
});

export default SearchBox;
