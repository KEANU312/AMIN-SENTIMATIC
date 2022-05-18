import "./searchbar.styles.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

export const SearchBar = ({ searchPlaceholder }) => {
  return (
    <form className="search-container">
      <label className="search-p">Search</label>
      <br />
      <div className="input-button-search">
        <input
          className="search-box"
          type="text"
          placeholder={searchPlaceholder}
        />
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-mag" />
        </div>
      </div>
    </form>
  );
};
