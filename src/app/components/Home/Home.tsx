import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard/MovieCard";
import { MoviesInfo } from "../../../utils/interfaces";

function Home() {
  const [trending, setTrending] = useState<MoviesInfo[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=5af17e5c645b39fe70411f3c10427c70"
      )
      .then((res) => {
        setTrending(res.data.results.slice(0, 8));
      });
  }, []);

  return (
    <section className='highlight'>
      <div className='container'>
        <div className='col-div-6'>
          <h1 className='title head2'>Highlights today</h1>
          <p className='p1'>Be sure not to miss these reviews today.</p>
        </div>
        <div className='col-div-6'>
          <div className='but-box'>
            <a href='/' className='tab-btn current'>
              Trending
            </a>
            <a href='/' className='tab-btn'>
              Latest
            </a>
            <a href='/' className='tab-btn'>
              TV Shows
            </a>
          </div>
        </div>
        <div className='clearfix'>
          {trending.map((element) => {
            return (
              <MovieCard
                key={element.id}
                id={element.id}
                title={element.title ? element.title : element.original_name}
                overview={element.overview}
                poster_path={element.poster_path}
                release_date={
                  element.release_date
                    ? element.release_date
                    : element.first_air_date
                }
                vote_average={element.vote_average}
                genre_ids={element.genre_ids}
              />
            );
          })}
        </div>
        <br />
      </div>
      <br />
    </section>
  );
}

export default Home;
