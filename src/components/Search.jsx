import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Search({ search }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searching = (value) => {
    navigate("/?search=" + value);
  };

  return (
    <div>
      <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            onChange={(ev) => {
              searching(ev.target.value);
            }}
            value={search}
          />
          <button className={styles.searchButton} type="submit">
            <FaSearch color="black" size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
