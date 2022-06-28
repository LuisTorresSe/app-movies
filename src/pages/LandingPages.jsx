import { useSearchParams } from "react-router-dom";
import { MovieGrid } from "../components/MovieGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebouce";
export function LandingPages() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const debounced = useDebounce(search, 800);
  return (
    <div>
      <Search search={search} />
      <MovieGrid key={debounced} search={debounced} />
    </div>
  );
}
