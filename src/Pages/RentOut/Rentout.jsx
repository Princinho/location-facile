import { PinDropSharp } from "@mui/icons-material"
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

                    <input type="text" {...register("name")} placeholder="Name of the house" title="Name of the house"></input>
                    <input type="text" {...register("address")} placeholder="Address of the house" title="Address of the house"></input>
                    <textarea {...register("about")} placeholder="About the house" title="About the house"></textarea>


                    <input type="text" {...register("gps")} placeholder="GPS Coordinates" title="Address of the house"></input>
                    <button className="action-button property-type active" title="Use current location">
                        <PinDropSharp className="btn-icon" />
                    </button>

                    <input type="submit" />
                </form>
            </div>

        </div>
    )
}