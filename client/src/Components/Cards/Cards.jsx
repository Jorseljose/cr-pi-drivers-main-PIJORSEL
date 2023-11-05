import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.container}>
      {/* {characters.map((character, index) => (
        <div key={index} className={style.cardContainer}>
          <Card character={character} onClose={onClose} />
        </div>
      ))} */}
      <Card />
    </div>
  );
};

export default Cards;
