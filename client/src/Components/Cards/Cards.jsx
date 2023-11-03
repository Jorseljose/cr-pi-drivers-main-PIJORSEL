import { useSelector } from "react-redux";

import "./Cards.css";
import Card from "../Card/Card";

const Cards = () => {
  const drivers = useSelector((state) => state.drivers);
  return (
    <div className="cards-container">
      {drivers.map((driver) => (
        <Card
          key={driver.id}
          id={String(driver.id)}
          name={driver.name}
          lastname={driver.lastname}
          nationality={driver.nationality}
          image={driver.image}
          description={driver.description}
          birthdate={driver.birthdate}
          teams={driver.teams.join(", ")}
          createDb={driver.createDb}
        />
      ))}
    </div>
  );
};

export default Cards;