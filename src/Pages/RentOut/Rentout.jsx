import { PinDropSharp } from "@mui/icons-material"
import { useForm } from "react-hook-form"
import { Form } from "react-router-dom"
export default () => {
    const { register, handleSubmit } = useForm()
    return (
        <div>
            <h1>Rent out your house</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" {...register("name")} placeholder="Name of the house" title="Name of the house"></input>
                    <input type="text" {...register("address")} placeholder="Address of the house" title="Address of the house"></input>
                    <textarea {...register("about")} placeholder="About the house" title="About the house"></textarea>
                </div>
                <div>
                    <input type="text" {...register("gps")} placeholder="GPS Coordinates" title="Address of the house"></input>
                    <button className="action-button property-type active">
                        <PinDropSharp className="btn-icon" />
                        <span>House</span>
                    </button>
                </div>
            </form>
        </div>
    )
}