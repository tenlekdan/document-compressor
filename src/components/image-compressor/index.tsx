import { useRef, useState } from 'react';
import './index.scss';
import { saveAs } from 'file-saver';
import imageCompression from 'browser-image-compression';
import { faPenToSquare, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageCompressor = () => {
    const [selectedFile, setSelectedFile] = useState(new File([], "unkown.jpeg"));
    const [isEdit, setIsEdit] = useState(false);
    const [acitveClass, setActiveClass] = useState('')
    const [fileName, setFileName] = useState('unkown.jpeg');
    const fileContentRef = useRef(null);
    function handleFileChange(event: any) {
        const file = event.target.files[0]
        if (file)
            setSelectedFile(file);
    }

    async function handleCompression() {
        const options = {
            maxSizeMB: 1,
            maxWidthorHeight: 1024,
            useWebWorkers: true,
        }
        if (selectedFile) {
            try {
                const compressedImage = await imageCompression(selectedFile, options);

                saveAs(compressedImage, fileName);
            } catch (error) {
                console.log(error)
            }
        }
    }

    function handleDrop(event: any) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file)
            setSelectedFile(file);
        setActiveClass('')
        setFileName(file?.name);
    }

    function handleDragOver(event: any) {
        event.preventDefault();
        setActiveClass('active'); // not depending on prev state
    }

    function setDefaultStyle(event: any) {
        event.preventDefault();
        setActiveClass('')
    };

    function handleEdit() {
        setIsEdit(true);
    }
    function handleNameChange({target}:any) {
        setFileName(target.value);
    }
    function handleOkClick() {
        let name:string = fileName;
        if (fileName.indexOf('.') < 0) 
            name = fileName + '.jpeg';
        setFileName(name);
        setIsEdit(false);
    }
    let fileNameJsx = (
        <div className="read-mode">
            <p>{fileName}</p>
            <button aria-label="Edit filename" onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} /></button>
        </div>
    );

    if (isEdit) {
        fileNameJsx = (
            <div className="edit-mode">
                <input type='text' value={fileName} onChange={handleNameChange} />
                <button className="ok" onClick={handleOkClick}>OK</button>
            </div>
        )
    }

    return (
        <>
            <h2>Image Compressor</h2>
            <div className={`file-uploader ${acitveClass}`}
                onDrop={handleDrop}
                onDragLeave={setDefaultStyle}
                onDragOver={handleDragOver}>
                <label htmlFor="file-upload" className="file-label" >
                    <span className="icon"><FontAwesomeIcon icon={faUpload} /></span>
                    <span className="text">Drag and Drop file here or <span className="choose-file">Choose file</span></span>

                </label>
                <input type="file" id="file-upload" onChange={handleFileChange} />
            </div>
            <p>Supported formats: jpeg, png, webp, and bmp</p>
            <div className="file-detials">
                <div className="file-name">{fileNameJsx}
                    <div className="file-content" ref={fileContentRef}>You can edit the file name. By clicking on "Compress," the file will be compressed and downloaded with the edited file name.</div>
                </div>
                <button className="compress-btn" onClick={handleCompression}>Compress</button>
            </div>
        </>
    )
}

export default ImageCompressor;