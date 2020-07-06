import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import movies from './movies.json';

function App() {
  const [currentMovies, setCurrentMovies] = useState("")

  function searchMovies(event) {
    setCurrentMovies(event.target.value)
  }

  function displayMovies(event) {
    return filterMovies().map((movie, id) => <li key={id} className={movie}>{movie.name} / {movie.year} </li> )
  }

  function filterMovies() {
    return movies.filter(movie => movie.name.toLowerCase().indexOf(currentMovies.toLowerCase()) !== -1)
  }
  return (
    <div className="App">
      <div>Afficher le nom du film</div>
      <input id="recherche" type="texte" placeholder="Recherche" value={currentMovies} onChange={searchMovies}/>
      <div>{displayMovies()}</div>
    </div>
  );
}

export default App;
