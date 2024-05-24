import s from "./SeachBar.module.css";
import search from "../../../public/search.svg";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {

  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={s.inputGroup}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && navigate(`search/${inputValue}`)
        }}
        ref={inputRef}
        type="search"
        placeholder="Search for pictures"
      />
      <Link to={`search/${inputValue}`}>
        <img
          src={search}
          alt="Search"
          width={50}
          height={50}
        />
      </Link>
    </div>
  )
}
export default SearchBar