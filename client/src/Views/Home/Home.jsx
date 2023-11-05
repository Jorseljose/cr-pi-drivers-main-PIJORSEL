import Cards from "../../Components/Cards/Cards";
import Filter from "../../Components/Filter/Filter";
import Pagination from "../../Components/Pagination/Pagination";
import styles from "../Home/Home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Filter />

      <Cards />

      <Pagination />
    </div>
  );
};

export default Home;
