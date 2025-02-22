import "./SearchIconButton.scss";
import SearchIcon from "../../imgs/icons/search-icon-01.png";

const SearchIconButton = () => {
  return (
    <button className="search-icon-button">
      <img
        src={SearchIcon}
        alt="Search icon"
      />
    </button>
  );
};

export default SearchIconButton;
