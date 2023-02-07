import './Layout.css'
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import SearchBar from '../Components/SearchBar/SearchBar';
import { Link, Outlet } from 'react-router-dom';
export default function Layout(props) {
    return (
        <main>
            <nav>
                <div className="logo"><h1>LOCATIONFACILE</h1></div>
                <div className="nav-links">
                    <ul>
                        <li className="nav-link"><Link to="">Buy</Link></li>
                        <li className="nav-link"><Link to="/Rent">Rent</Link></li>
                        <li className="nav-link"><Link to="">Sell</Link></li>
                        <li className="nav-link"><Link to="">Rent out</Link></li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <SearchBar />
                    <Link to=""><BookmarkSharpIcon style={{ color: "#587A82"}}/></Link>
                    <Link to=""><NotificationsSharpIcon style={{ color: "#587A82"}}/></Link>
                </div>
            </nav>
            <Outlet/>
        </main>
    )
}