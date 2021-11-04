import { React, useState } from "react";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(props.keyword);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p style={{ color: "purple" }}>
          {keyword && "Keywords Typed: " + keyword}
        </p>
        <label>
          Book name:{" "}
          <input
            value={props.keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Search;
