import { Container, Card } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Cardmovie from "./components/Cardmovie";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState(
    () => JSON.parse(localStorage.getItem("movies")) || [],
    []
  );

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleDeleteMovie = (movieId) => {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  };

  return (
    <Container>
      <h1 className="text-center mb-4 pt-4">Alta de Películas</h1>
      <Formulario handleAddMovie={handleAddMovie} />
      <h1 className="text-center my-4">Listado de Películas</h1>
      <Cardmovie handleDeleteMovie={handleDeleteMovie} movies={movies} />
    </Container>
  );
}

export default App;
