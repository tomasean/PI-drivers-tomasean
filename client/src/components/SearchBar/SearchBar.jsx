import { useState } from "react";
import style from './SearchBar.module.css'
import {useDispatch} from 'react-redux'
import { getDriversByName } from "../../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch()

    const [searchText,setSearchText] = useState('');

    const handleChange = (event) =>{
        setSearchText(event.target.value);
    }

    const handleClick = ()=>{
        dispatch(getDriversByName(searchText))
    }

    return <div className={style.container}>
      <input type='search' onChange={handleChange} value={searchText}></input>
      <button onClick={handleClick}>Buscar</button>
      </div>;
  };
  
  export default SearchBar;