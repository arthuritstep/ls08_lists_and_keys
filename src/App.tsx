import { useState } from "react";
import "./styles.css";

type Movie = {
  id: number;
  title: string;
  genre: string;
};

function App() {
  const [movies] = useState<Movie[]>([
    { id: 1, title: "Интерстеллар", genre: "Фантастика" },
    { id: 2, title: "Матрица", genre: "Фантастика" },
    { id: 3, title: "1+1", genre: "Комедия" },
  ]);

  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>менеджер фильмов</h1>

      <input
        type="text"
        placeholder="введите название фильма..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <h2>{movie.title}</h2>
              <p>жанр: {movie.genre}</p>
            </div>
          ))
        ) : (
          <p className="not-found">фильм не найден</p>
        )}
      </div>
    </div>
  );
}

export default App;