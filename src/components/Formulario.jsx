import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Formulario = ({ handleAddMovie }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newMovie = {
      ...data,
      id: Math.random(),
    };
    handleAddMovie(newMovie);
    reset(); // limpia el formulario
  };

  return (
    <Form
      className="bg-dark text-white p-4 rounded-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group className="mb-3" controlId="formMovieName">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el nombre de la película"
          {...register("nombre", {
            required: "Ingresa el nombre de la película",
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 50,
              message: "El nombre no puede tener más de 50 caracteres",
            },
          })}
          isInvalid={!!errors.nombre}
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombre?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMovieDescription">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Descripción de la película"
          {...register("descripcion", {
            required: "Ingresa una descripción",
            minLength: {
              value: 10,
              message: "La descripción debe tener al menos 10 caracteres",
            },
            maxLength: {
              value: 200,
              message: "La descripción no puede tener más de 200 caracteres",
            },
          })}
          isInvalid={!!errors.descripcion}
        />
        <Form.Control.Feedback type="invalid">
          {errors.descripcion?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Selecciona una categoría:</Form.Label>
        <Form.Select
          {...register("categoria", { required: "Selecciona una categoría" })}
          isInvalid={!!errors.categoria}   
        >
          <option value="">---Seleccione una categoría---</option>
          <option>Comedia</option>
          <option>Drama</option>
          <option>Infantil</option>
          <option>Acción</option>
          <option>Terror</option>
          <option>Suspenso</option>
          <option>Romántico</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.categoria?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" className="d-flex ms-auto">
        Guardar
      </Button>
    </Form>
  );
};

export default Formulario;
