import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [cards, setCards] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/drivers`).then(({ data }) => {
      if (data.name) {
        setCards(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCards({});
  }, [id]);

  return (
    <div>
      <h2>{cards?.name}</h2>
      <h2>{cards?.status}</h2>
      <h2>{cards?.species}</h2>
      <h2>{cards?.gender}</h2>
      <h2>{cards?.origin?.name}</h2>
      <img src={cards?.image} alt="imagen" />

      <Link to="/home">
        <button>HOME</button>
      </Link>
    </div>
  );
};

export default Details;
