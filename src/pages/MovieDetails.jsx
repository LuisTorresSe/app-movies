import { useEffect, useState } from "react";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { HttpClient } from "../utils/httpclient";
import { Spinner } from "../components/Spinner";
import { getImgMovie } from "../utils/getImgMovie";

export function MovieDetails() {
  const { movieid } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    HttpClient("/movie/" + movieid).then((res) => {
      setIsLoading(false);
      setMovie(res);
    });
  }, [movieid]);

  if (isLoading) {
    return <Spinner />;
  }
  const getImg = getImgMovie(movie.poster_path, 500);
  return (
    <div className={styles.ContainerDetails}>
      <img
        width="400px"
        height="auto"
        src={getImg}
        alt={movie.title}
        className={styles.img}
      />
      <div className={styles.description}>
        <p>
          {" "}
          <strong> Title : {movie.title}</strong>
        </p>
        <p>
          {" "}
          <strong>Genres:</strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong> Description </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
