import React, { Component } from "react";
import { addFavourite, removeFavourite } from "../actions";
import { connect } from "react-redux";

class MovieCard extends Component {
  handleFavouriteClick = () => {
    const { movie, addFavourite } = this.props;
    addFavourite(movie);
    
    console.log(movie.Title, "added to Favourites");
  };
  
  handleUnfavouriteClick = () => {
    const { movie, removeFavourite } = this.props;
    removeFavourite(movie);

    console.log(movie.Title, "removed from Favourites");
  };
  
  render() {
    const { movie, isFavourite } = this.props;
    // console.log(this.props);
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnfavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { addFavourite, removeFavourite })(MovieCard);