import React from "react";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({id, title, poster_path, overview, vote_average ,release_date, original_language,popularity,vote_count}) => {
  const setVoteClass = (vote) => {
      console.log({id,title, poster_path,overview,vote_average,release_date, original_language, popularity,vote_count } )
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      {poster_path ? (
        <img src={IMAGE_API + poster_path} alt={title} />
      ) : (
        <img src="no-cover.png" alt={title} />
      )}
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>Rating:{vote_average}</span>
      </div>

      <div className="movie-overview">
        <h3>Overview:</h3>
        <p>{overview}</p>
        <div> 
          <h3>Id:</h3>{id}
      </div>
      <div>
          <h3>Release Date:</h3>{release_date}
      </div>
      <div>
          <h3>Original Language:</h3>{original_language}
      </div>
      <div> 
          <h3>Popularity:</h3>{popularity}
      </div>
      <div> 
          <h3>Vote Count:</h3>{vote_count}
      </div>
     </div>
    </div>
    
  );
};

export default Movie;