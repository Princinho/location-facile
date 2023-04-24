import { AspectRatio, Bathtub, Bed, BookmarkBorder } from "@mui/icons-material"
import "./SearchResult.css"
export default function SearchResult({ imageUrl, title, adress, price, surface, bathroomsCount, bedroomsCount }) {

    return (<div className="search-result">
        <img src={imageUrl} alt="" className="search-result-image" />
        <div className="search-result-details">
            <span className="search-result-title">{title}</span>
            <span className="search-result-adress">{adress}</span>
            <span className="search-result-conveniences">
                <span className="search-result-convenience">
                    <Bed />
                    <span>{bedroomsCount}</span>
                </span>
                <span className="search-result-convenience">
                    <Bathtub />
                    <span>{bathroomsCount}</span>
                </span>
                <span className="search-result-convenience">
                    <AspectRatio />
                    <span> {surface}m<sup>2</sup></span>
                </span>
            </span>
            <span className="search-result-price-tag">{price}</span>
        </div>
        <button className="search-result-bookmark"><BookmarkBorder /></button>
    </div>)
}