import React, { useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/constants";
import "./Banner.css";
import { useEffect } from "react";
import axios from "../../axios";
import Youtube from 'react-youtube'

function Banner() {
  const [movie, setMovie] = useState();
  const [urlId, setId] = useState('')
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        let len = (response.data.results).length
        let index = Math.floor(Math.random() * len)
        // setMovie(response.data.results[index]);
        setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0]);
      });
  }, []);
  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results);
      if (response.data.results.length !== 0) {
        setId(response.data.results[0])
      } else {
        alert("Trailer not available")

      }
    }).catch((err) => {
      alert("Something error");

    })
  }
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url( ${movie ? imageUrl + movie.backdrop_path : ""})` }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
