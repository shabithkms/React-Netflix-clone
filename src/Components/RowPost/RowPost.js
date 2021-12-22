import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { API_KEY, imageUrl } from "../../Constants/constants";
import axios from "../../axios";
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setId] = useState('')
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
        console.log("movies", movies);
      })
      .catch((err) => {
        // alert("Network error");
      });
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
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
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img onClick={() => handleMovie(movie.id)}
            className={props.isSmall ? 'smallPoster' : "poster"}
            src={`${imageUrl + movie.backdrop_path}`}
            alt="Poster"
          />
        ))}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
