import './App.css';
import React, {useState, useEffect} from "react";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import FilmContainer from './containers/FilmContainer';
import FavouriteDetail from './components/FavouriteDetail';

function App() {

  const [films, setFilms] = useState([]);


  useEffect(() => {
      getFilms()
  }, [])

  const getFilms = () => {
      fetch(`https://ghibliapi.herokuapp.com/films`)
      .then(res => res.json())
      .then(data => setFilms(data))
  }

  const HandleFavouriteToggle = (id) => {
      const updatedFilms = films.map((film) => {
          return film.id === id
              ? {...film, isInFavourite: !film.isInFavourite} : film
      })
      setFilms(updatedFilms);
  }

  const checkoutFavourite = () => {
    const updatedFilms = films.map((film) => {
        return {...film, isInFavourite: false}
    })
    setFilms(updatedFilms)
  }

  return (
      <>
      <Router>
            <NavBar />

            <Routes>
                <Route exact path="/" element={<FilmContainer films={films} HandleFavouriteToggle={HandleFavouriteToggle} />} />
                <Route exact path="/favourite" element={<FavouriteDetail films={films} onFavouriteToggle={HandleFavouriteToggle} checkoutFavourite={checkoutFavourite}/>} />
            </Routes>
        </Router>
        </>
  );
}

export default App;