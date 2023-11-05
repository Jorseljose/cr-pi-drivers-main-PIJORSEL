import style from "./Card.module.css";

const Card = ({ image, name, escuderias }) => {
  return (
    <div className={style.contenedor}>
      <img
        className={style.img}
        src="https://s3-alpha-sig.figma.com/img/70bd/7fee/2b709fdfc78f03d1d82b398384579410?Expires=1699833600&Signature=O9FRT9JizR8wml5yyct0ayZpD6ZxXb4hnyV8N68JDXxyV8n-g~7PLs0E5ejD2KreBnDcF1LA-cu7sKluqac9GSsJEaHJ-3ksBstqzoXEM-rWX4lcP-iJvOEpn4whnfpCVja1nv0FcTfbkZWiU9mhWIC4cIE4wqeinJ6LPtnwqQfUS5hsgFgfrCp5D7j0wsvJAh2lq24nvrEEaYBQPeABwAy8RJcqFRynikBGqos8VvbYhVPhVP8cuG~TPms45~6nlFx-ziIpz3grgh7SwT1-1Wcqwp364I0m~EnildBoUbfZ90hQOXPZEB0SPM10R80Z-GAOIqps8EszM-GfM1ctnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <p className={style.name}>Jhon Lennon</p>
      <div className={style.auto}>
        <p className={style.tag}>Ferrari</p>
        <p className={style.tag}>Ferrari</p>
        <p className={style.tag}>Ferrari</p>
        <p className={style.tag}>Ferrari</p>
      </div>
    </div>
  );
};

export default Card;
