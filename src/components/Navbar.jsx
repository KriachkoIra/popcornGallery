import { useRef, useEffect } from "react";

export default function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>PopcornGallery</h1>
    </div>
  );
}

export function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query || ""}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}

export function NumResults({ numMovies }) {
  return (
    <p className="num-results">
      Found <strong>{numMovies}</strong> results
    </p>
  );
}
