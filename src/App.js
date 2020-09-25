import React from "react";
import "./App.css";
import request from "./request";

import Row from "./components/Row";
import Banner from "./components/Banner";

// API Key = 500c67c3d5e23e2934ce88303472f71c
// Accessing poster image base url = https://image.tmdb.org/t/p/w500
// Accessing poster image base url = https://image.tmdb.org/t/p/original  --> this would give high resolution images

function App() {
  return (
    <div className="app">
      {/* Nav */}
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        isLargeRow
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row title="Ternding Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
