import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  POSTER_URL,
  TRAILER_URL,
  GENRES_IDS,
} from "../../../../utils/variables";
import { MoviesInfo } from "../../../../utils/interfaces";

function MovieCard(props: MoviesInfo) {
  const posterUrl = POSTER_URL + props.poster_path;
  const [trailer, setTrailer] = useState(null);
  const [genres, setGenres] = useState("");

  useEffect(() => {
    props.genre_ids?.forEach((element: string) => {
      for (const [key, value] of Object.entries(GENRES_IDS)) {
        if (key === element.toString()) {
          setGenres(value + " ");
        }
      }
    });

    let trailerUrl = TRAILER_URL.replace("movie_id", props.id);

    axios
      .get(trailerUrl)
      .then((res) =>
        setTrailer(res.data.results.filter((x: any) => x.type === "Trailer"))
      );
  }, []);

  return (
    <div className='box1'>
      <img className='hover' src={posterUrl} alt='movie-thumbnail' />
      <p className='p2'>{props.title}</p>
      <p className='tag'>
        <strong>Genres:</strong> {genres.trim()}
      </p>
      <p className='tag'>
        <strong>Release date:</strong> {props.release_date}
      </p>
    </div>
  );
}

export default MovieCard;
