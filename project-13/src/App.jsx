import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  /* =============================
     1. UI STATE (FAST CHANGING)
     ============================= */

  // Stores what the user types immediately
  const [search, setSearch] = useState("");

  // Pagination state
  const [page, setPage] = useState(1);

  /* =============================
     2. DEBOUNCED STATE
     ============================= */

  // Stores debounced version of search
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    // Cleanup = cancel previous timer
    return () => clearTimeout(timer);
  }, [search]);

  /* =============================
     3. QUERY FUNCTION
     ============================= */

  const fetchMovies = async ({ queryKey }) => {
    const [_key, searchTerm, currentPage] = queryKey;

    const res = await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=71dc54d0&page=${currentPage}`
    );

    const data = await res.json();

    // OMDb sends logical errors, not HTTP errors
    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    return data;
  };

  /* =============================
     4. REACT QUERY HOOK
     ============================= */

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["movies", debouncedSearch, page],
    queryFn: fetchMovies,
    enabled: !!debouncedSearch,      // don't run when input is empty
    keepPreviousData: true,           // smooth pagination
    staleTime: 5 * 60 * 1000,          // cache for 5 minutes
  });

  /* =============================
     5. UI
     ============================= */

  return (
    <div >
      <div className="flex flex-col justify-center items-center">
        <h2 className=" mt-4">Movie Search</h2>

      {/* Search Input */}
      <input
        type="text"
        className=" border-2 rounded-xl mb-5 mt-3"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset page when search changes
        }}
        style={{ padding: "8px", width: "250px" }}
      />
      </div>

      <div className="flex justify-center items-center">
        {/* Initial Loading */}
        {isLoading && 
          <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div>}

      {/* Error State */}
      {isError && <p style={{ color: "red" }}>{error.message}</p>}

      </div>
      {/* Results */}
      {data?.Search && (
        <div className="grid grid-cols-4">
          {data.Search.map((movie) => (
            <div key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
             <h3>{movie.Title}</h3>
             <p>{movie.Type}</p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mb-4">
        {debouncedSearch && (
        <div style={{ marginTop: "10px" }}>
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          <span style={{ margin: "0 10px" }}>
            Page {page}
          </span>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={isFetching}
          >
            Next
          </button>

          {isFetching && <p>Updating...</p>}
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
