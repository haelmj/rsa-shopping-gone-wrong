import React from "react";

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
          <input type="submit" value='Search'/>
        </label>
      </form>
    </div>
  );
};
export default Search;
