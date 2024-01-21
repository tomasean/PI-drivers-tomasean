import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
const Nav = () =>{

    return <div className={style.container}>
        <SearchBar />
    </div>
}

export default Nav;