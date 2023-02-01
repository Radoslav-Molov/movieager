import React, { useEffect, useState } from "react";
import axios from "axios";
import { MoviesInfo } from "../../../utils/interfaces";

function Banner() {
  const [upcoming, setUpcoming] = useState<MoviesInfo[]>([]);
  const [current, setCurrent] = useState<any>();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=5af17e5c645b39fe70411f3c10427c70&language=en-US"
      )
      .then((res) => {
        setUpcoming(res.data.results.slice(0, 5));
      });

    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      if (counter === 4) {
        setCounter(0);
      }
      setCurrent(upcoming[counter]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='banner'>
      <div className='container'>
        <div className='content-container'>
          <span className='rating'>Upcoming Movies</span>

          {/* <h1 className='title'>{current.title}</h1> */}
          {/* <span>
            <img src='image/star.svg' className='star' />
          </span>
          <a href='' className='an'>
            <img src='image/tag.svg' />
            Comedy Horror
          </a>
          <a href='' className='an'>
            <img src='image/time.svg' />
            July 15, 2020
          </a> */}
          {/* <p className='des'>{current.overview}</p> */}
          <button className='read-more'>Read More</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
