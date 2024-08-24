
import './App.css';
import MovieController from './controller/MovieController';
import  axios from 'axios';
import MovieList from './view/MovieList';

function App() {

async function fun() {
 const {data} = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7')
console.log(data.results);

}
fun()

  return (
    <div className="App">
      <MovieList/>
    </div>
  );
}

export default App;
