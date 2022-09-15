import "./App.css";
import MovieCard from "./Components/MovieCard/MovieCard";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <h1>Movies</h1>
      <Search />
      <MovieCard />
    </div>
  );
}

export default App;
