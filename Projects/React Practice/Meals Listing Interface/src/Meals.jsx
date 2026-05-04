import React, { useState } from "react";
import "./Meals.css";

function Meals() {
  const [data, setData] = useState([]);

  const url = "https://api.freeapi.app/api/v1/public/meals";
  const options = { method: "GET", headers: { accept: "application/json" } };

  async function getMeals() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      {data.length === 0 && (
        <button className="fetch-btn" onClick={getMeals}>
          Reveal the Feast
        </button>
      )}

      <div className="cards-container">
        {data.map((meal) => (
          <div className="card" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="card-content">
              <h2>{meal.strMeal}</h2>
              <p>
                <strong>Category:</strong> {meal.strCategory}
              </p>
              <p>
                <strong>Area:</strong> {meal.strArea}
              </p>
              <p className="instructions">
                {meal.strInstructions.slice(0, 120)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;
