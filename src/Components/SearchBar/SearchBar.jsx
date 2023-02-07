import "./SearchBar.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
export default function SearchBar({ name, id }) {
    return (
        <div className="search-bar">
            <SearchSharpIcon className="search-icon"/>
            <input type="text" placeholder="Search" className="nav-search-bar" name={name} id={id} />
        </div>
    )
}