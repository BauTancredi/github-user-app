import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      const user = await response.json();

      if (response.ok) {
        setUser(user);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="App" id="light">
      <div
        className="container-sm d-flex justify-content-center p-2"
        style={{
          border: "1px solid black",
          maxWidth: "600px",
          flexDirection: "column",
        }}
      >
        <div className="header d-flex align-items-center justify-content-between">
          <h1 className="mb-0">devfinder</h1>
          <p className="mb-0">Light</p>
        </div>

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
      </div>
    </div>
  );
}

export default App;
