import "./MovieCard.css"; // Import custom CSS

const MovieCard = ({ movie } : any) => {
  if (!movie) return <p className="error">No movie data available.</p>;

  return (
    <div className="movie-card">
      <img className="poster" src={movie.Poster} alt={movie.Title} />
      <div className="content">
        <h2 className="title">{movie.Title} ({movie.Year})</h2>
        <p className="genre">{movie.Genre}</p>
        <p className="plot">{movie.Plot}</p>
        <p className="director"><strong>Director:</strong> {movie.Director}</p>
        <p className="writer"><strong>Writer:</strong> {movie.Writer}</p>
        <p className="actors"><strong>Actors:</strong> {movie.Actors}</p>
        <p className="rating"><strong>IMDb:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)</p>
        <p className="awards"><strong>Awards:</strong> {movie.Awards}</p>
      </div>
    </div>
  );
};

export default MovieCard;