import React, { useEffect, useState } from "react";

function Joke() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(res => res.json())
      .then(newJoke => {
        console.log("Joke json", newJoke);
        setJoke(newJoke);
      });
  }, []);

  const { setup, punchline } = joke;

  return (
    <div>
      <h2>Joke of the session</h2>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  );
}
export default Joke;
