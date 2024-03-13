import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';


function HomeScreen() {
    const [excelData, setExcelData] = useState([]);
    const [showData, setShowData] = useState(false);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            setExcelData(excelData);
        };

        reader.readAsArrayBuffer(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const toggleDisplayData = () => {
        setShowData(!showData);
    };

    return (
        <div>
            <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop an Excel file here, or click to select one</p>
            </div>
            <Button variant="contained" color="primary" onClick={toggleDisplayData}>
                {showData ? "Hide Data" : "Display Data"}
            </Button>
            {showData && excelData.length > 0 && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {excelData[0].map((header, index) => (
                                    <TableCell key={index}>{header}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {excelData.slice(1).map((row, index) => (
                                <TableRow key={index}>
                                    {row.map((cell, index) => (
                                        <TableCell key={index}>{cell}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}

const dropzoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

export default HomeScreen;
