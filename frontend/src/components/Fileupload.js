// src/FileUpload.js
import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const onDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            console.log(formData, 'formdata');
            formData.append(".xlsx", file);
            const response = await axios.post("http://localhost:4000/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error uploading file");
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div>
            <div {...getRootProps()} style={{ border: "1px dashed black", padding: "20px", textAlign: "center", cursor: "pointer" }}>
                <input {...getInputProps()} />
                {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop a CSV file here, or click to select one</p>}
            </div>
            {file && (
                <div>
                    <p>Selected file: {file.name}</p>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default FileUpload;
