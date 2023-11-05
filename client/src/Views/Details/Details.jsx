import style from "../Details/Details.module.css";

const Details = ({
  id,
  name,
  lastName,
  nationality,
  image,
  description,
  birthdate,
  teams,
}) => {
  return (
    <div className={style.detailPage}>
      <div className={style.contenedorDetails}>
        <img
          className={style.imgDetails}
          src="https://s3-alpha-sig.figma.com/img/70bd/7fee/2b709fdfc78f03d1d82b398384579410?Expires=1699833600&Signature=O9FRT9JizR8wml5yyct0ayZpD6ZxXb4hnyV8N68JDXxyV8n-g~7PLs0E5ejD2KreBnDcF1LA-cu7sKluqac9GSsJEaHJ-3ksBstqzoXEM-rWX4lcP-iJvOEpn4whnfpCVja1nv0FcTfbkZWiU9mhWIC4cIE4wqeinJ6LPtnwqQfUS5hsgFgfrCp5D7j0wsvJAh2lq24nvrEEaYBQPeABwAy8RJcqFRynikBGqos8VvbYhVPhVP8cuG~TPms45~6nlFx-ziIpz3grgh7SwT1-1Wcqwp364I0m~EnildBoUbfZ90hQOXPZEB0SPM10R80Z-GAOIqps8EszM-GfM1ctnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div className={style.auto}>
          <div className={style.detailContainer}>
            <p className={style.DetailsId}>#:</p>
            <div className={style.DetailsId}>0001</div>
          </div>
          <div className={style.detailContainer}>
            <div className={style.label}>Nombre: </div>
            <p className={style.detail}>Jhon Lennon</p>
          </div>
          <div className={style.detailContainer}>
            <div className={style.label}>Apellido: </div>
            <p className={style.detail}>Jhon Lennon</p>
          </div>
          <div className={style.detailContainer}>
            <div className={style.label}>Nacionalidad: </div>
            <p className={style.detail}>Venezolano</p>
          </div>
          <div className={style.detailContainer}>
            <div className={style.label}>Descripcion: </div>
            <p className={style.detail}>
              LoremLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec vel egestas dolor, nec dignissim metus. Donec augue elit,
              rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum
              libero sed pharetra.Donec vel egestas dolor, nec dignissim metus.
              Donec augue elit, rhoncus ac sodales id, porttitor vitae est.
              Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis,
              gravida purus eget, mollis diam.
            </p>
          </div>
          <div className={style.detailContainer}>
            <div className={style.label}>Fecha de nacimiento: </div>
            <p className={style.detail}>01/01/2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
