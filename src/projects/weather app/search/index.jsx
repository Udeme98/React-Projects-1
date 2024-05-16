import "./search.css";

const Search = ({ search, setSearch, handleWeatherSearch }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" onClick={handleWeatherSearch}>
        Search
      </button>
    </div>
  );
};
export default Search;
