import style from "../Create/Create.module.css";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const Create = ({
  image,
  name,
  lasName,
  nationality,
  description,
  birthDate,
  teams,
}) => {
  return (
    <div className={style.createPage}>
      crear Nuevo Drivers
      <div className={style.NuevoDriver}>Cargar Imagen</div>
      <Input placeholder="Nombre" label="Nombre" />
      <Input placeholder="Apellido" label="Apellido" />
      <Input placeholder="Nacionalidad" label="Nacionalidad" />
      <Input placeholder="Descripción" label="Descripción" />
      <Input placeholder="Fecha-de-nacimiento" label="Fecha-de-nacimiento" />
      <Input placeholder="Escuderias" label="Escuderias" />
      <Button>Create</Button>
    </div>
  );
};

export default Create;
