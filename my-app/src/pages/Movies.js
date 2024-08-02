// src/pages/Movies.js
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Replace with your API call
    fetch('https://api.example.com/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Movies Page</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
        ))}
      </div>
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

export default Movies;
