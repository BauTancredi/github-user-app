import React from "react";

type SearchBarProps = {
  input: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ handleChange, handleSubmit, input }: SearchBarProps) => {
  return (
    <div className="search-bar d-flex mt-4 bt-3 align-items-center">
      <i
        className="bi-search"
        style={{ fontSize: "1.5rem", color: "#0d6efd", marginLeft: "10px" }}
      ></i>
      <form className="d-flex w-100" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Github username..."
          className="form-control"
          value={input}
          onChange={handleChange}
        />
        <button
          className="btn btn-primary ms-2"
          type="submit"
          style={{
            borderRadius: "5px",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
