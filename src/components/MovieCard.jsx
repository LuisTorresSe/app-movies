import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import { getImgMovie } from "../utils/getImgMovie";

export function MovieCard({ movie }) {
  const getImg = getImgMovie(movie.poster_path, 300);
  return (
    <Link to={"/movies/" + movie.id}>
      <li key={movie.id} className={styles.movieCard}>
        <p className={styles.title}>{movie.title} </p>
        <img
          width="230px"
          height="360px"
          className={styles.imagecard}
          src={getImg}
          alt={movie.title}
        />
      </li>
    </Link>
  );
}
