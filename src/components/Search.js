import { React, useState } from "react";

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(props.keyword);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Book name:
          <input
            value={props.keyword}
            onChange={(e) => props.setKeyword(e.target.value)}
          />
          <p style={{ color: "purple" }}>
            {props.keyword && "Keywords Typed: " + props.keyword}
          </p>
          <input type="submit" />
        </label>
      </form>
    </div>
  );
};
export default Search;
