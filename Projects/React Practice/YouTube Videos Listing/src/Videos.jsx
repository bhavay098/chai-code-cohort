import React, { useState } from "react";
import "./Videos.css";

function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://api.freeapi.app/api/v1/public/youtube/videos";
  const options = { method: "GET", headers: { accept: "application/json" } };

  async function fetchVideos() {
    setLoading(true);

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      setVideos(data.data.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <div className="app">
      {videos.length === 0 ? (
        <button className="fetch-btn" onClick={fetchVideos}>
          {loading ? "Loading..." : "Fetch Videos"}
        </button>
      ) : (
        <div className="videos-grid">
          {videos.map((video) => (
            <div className="video-card" key={video.items.id}>
              <img
                src={video.items.snippet.thumbnails.high.url}
                alt={video.items.snippet.title}
                className="thumbnail"
              />

              <div className="video-content">
                <h2>{video.items.snippet.title}</h2>

                <p className="channel">{video.items.snippet.channelTitle}</p>

                <p className="description">{video.items.snippet.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Videos;
