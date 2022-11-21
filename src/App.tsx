import fetchUser from "./api";
import useLazyQuery from "./hooks/useLazyQuery";

function App() {
  const [setEnabled, query] = useLazyQuery(["user"], fetchUser);

  // on click fetch user from github api using react-query
  const handleClick = () => {
    setEnabled(true);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Get user</button>
    </div>
  );
}

export default App;
