import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const MovieInfo = ({ addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
      setIsAdded(true);
    };
 

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieData() {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=63398e9a`
      );
      const data = await response.json();
      setMovie(data);

    }
    fetchMovieData();
  }, [id]);
  
  if (!movie) return <p>Loading...</p>;
  
  const interval = 5;

  // Function to get random prices for posters
  function getRandomPrice(min = 20, max = 40) {
    return (
      Math.floor(Math.random() * ((max - min) / interval + 1)) * interval + min
    );
  }

  const posterPrice = `$${getRandomPrice()}`;

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="poster_container">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="movie_details">
            <h1 className="movie_title">{movie.Title}</h1>
            <div className="movie_sub-details">
              <p className="movie_detail">
                <span className="yellow">Plot:</span> {movie.Plot}
              </p>
              <p className="movie_detail">
                <span className="yellow">Released:</span> {movie.Released}
              </p>
              <p className="movie_detail">
                <span className="yellow">Genre:</span> {movie.Genre}
              </p>
              <p className="movie_detail">
                <span className="yellow">Rated:</span> {movie.Rated}
              </p>
              <p className="movie_detail">
                <span className="yellow">Price:</span> {posterPrice}.00
              </p>
              <p className="movie_detail id_detail">
                Id: {movie.imdbID}
              </p>
              <button className="cart_btn" disabled={isAdded} onClick={() => { addToCart(movie); handleClick(); }} style={{
                  backgroundColor: isAdded ? "gray" : "#fff",
                  color: isAdded ? "#fff" : "#000",
                }}
              >
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MovieInfo;
