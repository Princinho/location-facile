import { useEffect, useState } from "react"
import "./ImagePreviewInput.css"
import { Add, AddPhotoAlternate } from "@mui/icons-material"

export default () => {
    const [selectedFiles, setSelectedFiles] = useState([])

    console.log(selectedFiles)

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            return
        }
        setSelectedFiles(prev => [...prev, e.target.files[0]])
    }

    function removeFile(file) {
        setSelectedFiles(prev => prev.filter(f => f.name !== file.name))
    }
    return (
        <div style={{ display: "flex" }}>
            <label className="file-upload-trigger" htmlFor="image-upload" ><span><AddPhotoAlternate className="btn-icon" /></span></label>
            <input className="custom-image-input" disabled={selectedFiles.length >= 3} id="image-upload" hidden type='file' accept="image/*" onChange={onSelectFile} />
            <div className="selected-images-wrapper">
                {selectedFiles.length > 0 && selectedFiles.map(file => <ImagePreview src={URL.createObjectURL(file)} removeFn={() => removeFile(file)} />)}
            </div>
        </div>
    )
}
function ImagePreview({ src, removeFn }) {
    return (
        <div className="selected-image">
            <img src={src} className="selected-image-preview" />
            <button onClick={removeFn} className="selected-image-remove-btn">X</button>
        </div>)
}