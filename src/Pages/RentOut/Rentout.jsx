import { LocationOn, PinDropSharp } from "@mui/icons-material"
import { useForm } from "react-hook-form"
import "./Rentout.css"
import { useState } from "react"
import ImagePreviewInput from "../../Components/ImagePreviewInput/ImagePreviewInput"
import { PickerDropPane } from "filestack-react-18"
export default () => {
    const { register, handleSubmit } = useForm()
    const [location, setLocation] = useState(null)
    function onSubmit(data) {
        console.log(data)
    }
    function getCurrentLocation() {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
        } else {
            console.log("Locating…");
            navigator.geolocation.getCurrentPosition((data) => setLocation(`${data.coords.longitude},${data.coords.latitude}`), error => console.log(error));
        }
    }
    return (
        <div>
            <h1>Rent out your house</h1>
            <div className="rentout-form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex-hr">

                        <input type="text" {...register("name")} placeholder="Name of the house" title="Name of the house"></input>
                        <input style={{ marginLeft: "1em" }} type="text" {...register("address")} placeholder="Address of the house" title="Address of the house"></input>
                    </div>
                    <textarea {...register("about")} placeholder="About the house" title="About the house"></textarea>

                    <div className="flex-hr">
                        <input type="text" {...register("gps")} defaultValue={location} placeholder="GPS Coordinates (Longitude,Latitude)" title="Address of the house"></input>
                        <button className="action-button property-type active" onClick={getCurrentLocation} title="Use current location">
                            <LocationOn className="btn-icon" />
                        </button>

                    </div>

                    <div>
                        <ImagePreviewInput />
                    </div>
                    <button type="submit" className="action-button" >Save</button>
                </form>
            </div>
            <PickerDropPane
                apikey={"A5PKlLhoGQ2arN4FTsbY2z"}
                onSuccess={(res) => console.log(res)}
                onUploadDone={(res) => console.log(res)}
            />
        </div>
    )
}