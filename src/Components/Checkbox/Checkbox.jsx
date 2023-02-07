import "./Checkbox.css"
import { useState } from "react"

export default function Checkbox({ label, checked, ...props }) {
    const [isChecked, setIsChecked] = useState(checked)
    return (
        <label className="styled-checkbox-wrapper">
            <input
                className="styled-checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
                {...props}
            />
            <span>{label}</span>
        </label>

    )
}