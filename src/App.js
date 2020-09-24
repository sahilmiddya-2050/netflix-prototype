import React, { useEffect, useState } from "react";
import "./App.css";
import Row from "./components/Row";
import request from "./request";
import instance from "./utils/axios";

// API Key = 500c67c3d5e23e2934ce88303472f71c
// Accessing poster image base url = https://image.tmdb.org/t/p/w500

function App() {
  const [trendingNow, setTrendingNow] = useState([]);
  useEffect(() => {
    instance.get(request.fetchTrending).then((data) => {
      // console.log(data);
      const results = data;
      console.log(results);
      setTrendingNow(results);
    });
  }, []);

  console.log(trendingNow);

  return (
    <div className="app">
      <Row title="Ternding Now" />
    </div>
  );
}

export default App;
