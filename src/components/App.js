import { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import MovieCard from "./MovieCard";
import { Navbar, MovieCard } from "./";
import { data } from "../data";
import { addMovies } from "../actions";

export default function App(props) {
  const [state, setState] = useState();
  useEffect(() => {
    const { store } = props;

    // store.subscribe(()=> {
    //   this.forceUpdate();
    // })

    store.dispatch(addMovies(data));

    setState(true);
    console.log("State", store.getState());
  }, []);

  // useEffect(() => {
  //   console.log(props);
  //   console.log(props.store.getState());
  // }, [props]);

  const { list } = props.store.getState();

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
          {list.map(movie => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
