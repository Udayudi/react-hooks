import React, { useState } from "react";
import Joke from "./Joke";

function App() {
  const [userQuery, setUserQuery] = useState("");
  // const state = useState();
  // const useQuery = state[0];
  // const setUserQuery = state[1];

  const updateUserQuery = event => {
    console.log("userQuery", userQuery);
    setUserQuery(event.target.value);
  };

  const handlKeyPress = event => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  return (
    <div>
      <h1>Hello Form Uday</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handlKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
    </div>
  );
}
export default App;
