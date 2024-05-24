import s from "./Header.module.css";
import columns_3 from "../../../public/3columns.svg";
import columns_5 from "../../../public/5columns.png";
import logo from "../../../public/logo.svg";
import SearchBar from "../SeachBar/SearchBar.tsx";
import { Link } from "react-router-dom";

const Header = ({ columns, setColumns, }: {
  columns: number,
  setColumns: (col: number) => void,
}) => {


  return (
    <>
      <div className={s.nav}>
        <Link to='/'>
          <div className={s.logoWrapper}>
            <img src={logo} width={50} height={50} alt=""/>
            Web-Gallery
          </div>
        </Link>
        <SearchBar/>
        <div className={s.viewButtons}>
          <button
            onClick={() => setColumns(3)}
            className={`${columns === 3 && s.changeViewButtonActive} ${s.changeViewButton}`}
          >
            <img src={columns_3} width={50} height={50} alt=''/>
          </button>
          <button
            onClick={() => setColumns(5)}
            className={`${columns === 5 && s.changeViewButtonActive} ${s.changeViewButton}`}
          >
            <img src={columns_5} width={50} height={50} alt=""/>
          </button>
        </div>
      </div>
    </>
  )
}
export default Header