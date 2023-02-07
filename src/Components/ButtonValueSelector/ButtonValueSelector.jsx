import { useState } from 'react'
import './ButtonValueSelector.css'
export default function ButtonValueSelector({ minValue, maxValue, pushValue }) {
    const [value, setValue] = useState(minValue)
    return (
        <div className="button-value-selector">
            <button onClick={() => setValue(value === 1 ? value : value - 1)}>-</button>
            <input type={"number"}
                value={value}
                min={minValue}
                max={maxValue}
                onChange={(e) => {
                    let newValue = e.target.value
                    if (newValue > maxValue) {
                        newValue = maxValue
                    }
                    setValue(newValue)
                    pushValue(newValue)
                }
                } />
            <button onClick={() => setValue(value + 1 > maxValue ? maxValue : value + 1)}>+</button>
        </div>
    )
}