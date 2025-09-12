import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function updateInput(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={updateInput}
      />
    </form>
  );
}

export default SearchOrder;
