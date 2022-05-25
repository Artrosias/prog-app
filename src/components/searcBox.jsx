import React from "react";

export const SearchBox = (props) => (
  <input
    className="search-box"
    type="search"
    placeholder="Es: Coldplay"
    onChange={props.onSearchChange}
  />
);
