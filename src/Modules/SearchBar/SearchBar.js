import './SearchBar.scss';

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search in store..." className="search-input" />
      <button className="search-button">🔍</button>
    </div>
  );
};

