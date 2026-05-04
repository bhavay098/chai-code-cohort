import React, { useState } from "react";
import "./Jokes.css";

function Jokes() {
  const [jokes, setJokes] = useState([]);

  const url = "https://api.freeapi.app/api/v1/public/randomjokes";
  const options = { method: "GET", headers: { accept: "application/json" } };

  async function getJokes() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // store full array
      setJokes(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      {/* First button */}
      {jokes.length === 0 && (
        <button className="fetch-btn" onClick={getJokes}>
          Reveal Jokes 🎭
        </button>
      )}

      {/* Cards */}
      {jokes.length > 0 && (
        <div className="cards-container">
          {jokes.map((joke) => (
            <div className="card" key={joke.id}>
              <div className="card-content">
                <h2>{joke.content}</h2>

                {Array.isArray(joke.categories) &&
                  joke.categories.length > 0 && (
                    <p className="instructions">
                      Categories: {joke.categories.join(", ")}
                    </p>
                  )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Jokes;
