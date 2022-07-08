import './App.css';
import {MovieContainer} from './components/movieContainer';
import {NavBar} from './components/navbar';
import {movies} from './movieData/movies';

function App() {
  const movieData=movies;
  return (
    <>
    <NavBar />
    <div className='App'>
      {
        movieData.map((movie, i) =>(
          <MovieContainer key={i} value={movie} />
        ))
      }
    </div>
    </>
  );
}

export default App;
