import "./Rent.css"
import { ApartmentSharp, BusinessCenterSharp, HouseSharp, TerrainSharp } from "@mui/icons-material";
import Checkbox from "../../Components/Checkbox/Checkbox";
import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ButtonValueSelector from "../../Components/ButtonValueSelector/ButtonValueSelector";
import SearchResult from "../../Components/SearchResult/SearchResult";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { data } from "../../Data"
export default function Rent(props) {
    const [priceRange, setPriceRange] = useState([50000, 100000])
    const [areaRange, setAreaRange] = useState([1000, 4000])
    console.log('data houses', data)
    const images = [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    ]
    function handleChange(event, values) {
        console.log(values)
        setPriceRange(values)
    }
    function handleAreaChange(event, values) {
        setAreaRange(values)
    }
    return (<div className="main-container">
        <section className="filters-wrapper">

            <h3>Filters</h3>
            <h4>Property type</h4>
            <div className="property-types">
                <button className="action-button property-type active">
                    <HouseSharp className="btn-icon" />
                    <span>House</span>
                </button>
                <button className="action-button property-type">
                    <ApartmentSharp className="btn-icon" />
                    <span>Apartment</span>
                </button>
                <button className="action-button property-type">
                    <BusinessCenterSharp className="btn-icon" />
                    <span>Commercial</span>
                </button>
                <button className="action-button property-type">
                    <TerrainSharp className="btn-icon" />
                    <span>Land</span>
                </button>
            </div>
            <h4>Rental period</h4>
            <Checkbox label={"All"} />
            <Checkbox label={"Letly"} />
            <Checkbox label={"Innly"} />
            <div className="price-range">
                <h4>Price Range</h4>
                <Box sx={{ width: 200 }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={priceRange}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={() => "Ten"}
                        min={5000}
                        max={200000}
                    />
                </Box>
                <div className="rental-buttons">
                    <span>{priceRange[0]}</span>
                    <span>{priceRange[1]}</span>
                    <button>OK</button>
                </div>
            </div>
            <div className="rooms">
                <div className="bathrooms">
                    <h4>BathRoom</h4>
                    <ButtonValueSelector minValue={1} maxValue={9} pushValue={(value) => console.log(value)} />
                </div>
                <div className="bathrooms">
                    <h4>BedRoom</h4>
                    <ButtonValueSelector minValue={1} maxValue={9} pushValue={(value) => console.log(value)} />
                </div>
            </div>
            <div className="property-area">
                <h4>Property area Range</h4>
                <Box sx={{ width: 200 }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={areaRange}
                        onChange={handleAreaChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={() => "Ten"}
                        min={500}
                        max={10000}
                    />
                </Box>
                <div className="rental-buttons">
                    <span>{areaRange[0]} m<sup>2</sup></span>
                    <span>{areaRange[1]} m<sup>2</sup></span>
                    <button>OK</button>
                </div>
            </div>
            <h4>Additional conveniences</h4>
            <Checkbox label={"Parking Slot"} />
            <Checkbox label={"Pets Allowed"} />
            <Checkbox label={"Furnished"} />
        </section>

        <section className="results-wrapper">
            <div className="results-header">
                <h3>Search Results 547</h3>
                <select>
                    <option value={"added-today"}>Added today</option>
                </select>
            </div>
            <div className="results-list">
                {data.map(house =>
                    <SearchResult imageUrl={house.images[0]}
                        title={house.name}
                        adress={house.address}
                        price={house.price.toLocaleString('fr-TG', {style: 'currency', currency: 'XOF'})}
                        bathroomsCount={house.bathroomsCount}
                        bedroomsCount={house.bedroomsCount}
                        surface={house.surface} />)}


            </div>
        </section>
        <section className="map-wrapper">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        <SearchResult imageUrl={images[1]}
                            title="Villa Ghana"
                            adress="354 rue des etrangers, Agoe logope"
                            price={"70.000"} />
                    </Popup>
                </Marker>
            </MapContainer>
        </section>
    </div>)
}