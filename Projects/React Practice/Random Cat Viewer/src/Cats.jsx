import React, { useState } from "react";
import "./Cats.css";

function Cats() {
  const [data, setData] = useState(null);

  const url = "https://api.freeapi.app/api/v1/public/cats/cat/random";
  const options = { method: "GET", headers: { accept: "application/json" } };

  async function getMeals() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();

      // store single object instead of array
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      {!data && (
        <button className="fetch-btn" onClick={getMeals}>
          Summon a Familiar 🐈
        </button>
      )}

      {data && (
        <div className="cards-container">
          <div className="card">
            <img src={data.image} alt="cat" />

            <div className="card-content">
              <h2>{data.name}</h2>

              <p>
                <strong>Origin:</strong> {data.origin}
              </p>
              <p>
                <strong>Temperament:</strong> {data.temperament}
              </p>
              <p>
                <strong>Lifespan:</strong> {data.life_span} years
              </p>

              <p className="instructions">
                {data.description?.slice(0, 140)}...
              </p>
            </div>
          </div>
        </div>
      )}

      {data && (
        <button className="next-btn" onClick={getMeals}>
          Summon Another 🔮
        </button>
      )}
    </div>
  );
}

export default Cats;
