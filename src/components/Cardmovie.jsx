import { Card, Button, Row, Col } from "react-bootstrap";

const Cardmovie = ({ handleDeleteMovie, movies }) => {
  return (
    <Row className="justify-content-center border border-dark rounded-3">
      {movies.length === 0 ? (
        <p className="text-center my-4">No hay películas en la lista.</p>
      ) : (
        movies.map((movie) => (
          <Col md={4} key={movie.id} className="py-4">
            <Card className="bg-dark text-white h-100">
              <Card.Body>
                <Card.Title>{movie.nombre}</Card.Title>
                <Card.Text>{movie.descripcion}</Card.Text>
                <Card.Text>Categoría: {movie.categoria}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteMovie(movie.id)}
                >
                  Eliminar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
};

export default Cardmovie;
