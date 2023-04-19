import { LocationOn, PinDropSharp } from "@mui/icons-material"
import { useForm } from "react-hook-form"
import "./Rentout.css"
export default () => {
    const { register, handleSubmit } = useForm()
    function onSubmit(data) {
        console.log(data)
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
                        <input type="text" {...register("gps")} placeholder="GPS Coordinates" title="Address of the house"></input>
                        <button className="action-button property-type active" title="Use current location">
                            <LocationOn className="btn-icon" />
                        </button>
                    </div>
                    <button type="submit" className="action-button" >Save</button>
                </form>
            </div>

        </div>
    )
}