import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = ({ handleAddMovie }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.descripcion || !formData.categoria) {
      alert("Por favor, completa todos los campos");
      return;
    }
    const newMovie = {
      ...formData,
      id: Math.random(),
    };
    handleAddMovie(newMovie);

    setFormData({
      nombre: "",
      descripcion: "",
      categoria: "",
    });
  };

  return (
    <Form className="bg-dark text-white p-4 rounded-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formMovieName">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el nombre de la película"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMovieDescription">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          placeholder="Descripción de la película"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Selecciona una categoría:</Form.Label>
        <Form.Select
          onChange={handleChange}
          name="categoria"
          value={formData.categoria}
        >
          <option>---Seleccione una categoría---</option>
          <option>Comedia</option>
          <option>Drama</option>
          <option>Infantil</option>
          <option>Acción</option>
          <option>Terror</option>
          <option>Suspenso</option>
          <option>Romántico</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" className="d-flex ms-auto">
        Guardar
      </Button>
    </Form>
  );
};

export default Formulario;
