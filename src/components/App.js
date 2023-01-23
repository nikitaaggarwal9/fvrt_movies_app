import { useEffect, useState } from "react";
import { connect } from "react-redux";
// import Navbar from "./Navbar";
// import MovieCard from "./MovieCard";
import { Navbar, MovieCard } from "./";
import { data } from "../data";
import { addMovies, addFavourite } from "../actions";

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
    console.log("State", props);
  }, [props]);

  const isMovieFavourite = movie => {
    const { favourites } = props;

    const index = favourites.indexOf(movie);
    if (index !== -1) return true;

    return false;
  };

  // useEffect(() => {
  //   // console.log(props);
  //   console.log("Render", props.store.getState());
  //   console.log(state);
  // }, [state]);

  console.log(props);
  const { list } = props;

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
          {list.map((movie, index) => (
            <MovieCard
              movie={movie}
              key={`movies-${index}`}
              addFavourite={props.addFavourite}
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

export default connect(mapStateToProps, { addMovies, addFavourite })(App);