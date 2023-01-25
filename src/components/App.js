import { useEffect, useState } from "react";
import { connect } from "react-redux";
// import Navbar from "./Navbar";
// import MovieCard from "./MovieCard";
import { Navbar, MovieCard } from "./";
import { data } from "../data";
import { addMovies, setShowFavourites } from "../actions";

function App(props) {
  // const [state, setState] = useState(true);
  useEffect(() => {
    // const { store } = props;

    // store.subscribe(()=> {
    //   this.forceUpdate();
    // })

    // props.dispatch(addMovies(data));
    props.addMovies(data);

    // setState(prev => !prev);
    // console.log("State", props);
  }, []);

  const isMovieFavourite = movie => {
    const { favourites } = props.movies;

    const index = favourites.indexOf(movie);
    if (index !== -1) return true;

    return false;
  };

  const onChangeTab = (val) => {
    props.setShowFavourites(val);
  }

  // useEffect(() => {
  //   // console.log(props);
  //   console.log("Render", props.store.getState());
  //   console.log(state);
  // }, [state]);

  // console.log(props);
  const { movies } = props;
  const { list, favourites, showFavourites } = movies;
  const displayMovies = showFavourites ? favourites : list;
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div
            className={`tab ${showFavourites ? "" : "active-tabs"}`}
            onClick={() => onChangeTab(false)}
          >
            Movies
          </div>
          <div
            className={`tab ${showFavourites ? "active-tabs" : ""}`}
            onClick={() => onChangeTab(true)}
          >
            Favourites
          </div>
        </div>

        <div className="list">
          {displayMovies.map((movie, index) => (
            <MovieCard
              movie={movie}
              key={`movies-${index}`}
              // addFavourite={props.addFavourite}
              // dispatch={props.dispatch}
              isFavourite={isMovieFavourite(movie)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { addMovies, setShowFavourites })(App);