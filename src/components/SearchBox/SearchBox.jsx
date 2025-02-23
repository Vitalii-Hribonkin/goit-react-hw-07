
import { useDispatch } from "react-redux"
import { setFilter } from "../../redux/filtersSlice";


const SearchBox = () => {

    const dispatch = useDispatch();

    return (
        
        <input type="text" onChange={(e) => dispatch(setFilter(e.target.value))}  placeholder='Search contacts'/>
            
    )
}

export default SearchBox