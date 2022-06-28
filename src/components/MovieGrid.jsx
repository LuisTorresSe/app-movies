import { MovieCard } from "./MovieCard";
import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import { HttpClient } from "../utils/httpclient";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "./Spinner";
import { Empty } from "./Empty";

export function MovieGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const movieURL = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    HttpClient(movieURL).then((res) => {
      setMovies((prevMovies) => prevMovies.concat(res.results));
      setHasMore(res.page < res.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }
  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.Cards}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
