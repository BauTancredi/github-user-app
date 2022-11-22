import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserInfo from "./components/UserInfo";

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(true);
    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      const user = await response.json();

      if (response.ok) {
        setUser(user);
        setError(false);
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
        className="container-sm d-flex justify-content-center main-container"
        style={{
          maxWidth: "600px",
          flexDirection: "column",
        }}
      >
        <Header />

        <SearchBar
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        {isLoading ? (
          <div className="d-flex justify-content-center mt-5">
            <div
              className="spinner-border text-primary"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="d-flex justify-content-center">
            <p className="text-danger">Something went wrong</p>
          </div>
        ) : user ? (
          <UserInfo user={user} />
        ) : null}
      </div>
    </div>
  );
}

export default App;

// Todo:
// Add a dark mode toggle
