import { LandingPages } from "./pages/LandingPages";
import styles from "./App.module.css";
import { Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";

export function App() {
  return (
    <div>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/movies/:movieid" element={<MovieDetails />} />
          <Route path="*" element={<p> error de página</p>} />
        </Routes>
      </main>
    </div>
  );
}
