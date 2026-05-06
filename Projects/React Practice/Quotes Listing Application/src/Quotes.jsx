import React, { useState } from "react";
import "./Quotes.css";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const url = "https://api.freeapi.app/api/v1/public/quotes";
  const options = { method: "GET", headers: { accept: "application/json" } };

  async function fetchQuotes() {
    setLoading(true);

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      setQuotes(data.data.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  function nextQuote() {
    setIndex((prev) => (prev + 1) % quotes.length);
  }

  return (
    <div className="app">
      {quotes.length === 0 ? (
        <button className="main-btn" onClick={fetchQuotes}>
          {loading ? "Loading..." : "Fetch Quotes"}
        </button>
      ) : (
        <div className="quote-card">
          <p className="quote">"{quotes[index].content}"</p>

          <h3 className="author">— {quotes[index].author}</h3>

          <button className="main-btn" onClick={nextQuote}>
            Next Quote
          </button>
        </div>
      )}
    </div>
  );
}

export default Quotes;
