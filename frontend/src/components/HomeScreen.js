import React, { useState } from 'react';
import { Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';

function HomeScreen() {
    const [excelData, setExcelData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [dataImported, setDataImported] = useState(false);
    const [openModal, setOpenModal] = useState(false);

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
            setDataImported(true);
        };

        reader.readAsArrayBuffer(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleImport = () => {
        setShowData(true);
        setOpenModal(false); // Close modal after importing data
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const renderTableCells = () => {
        return excelData.map((row, index) => (
            <TableRow key={index}>
                {row.map((cell, index) => (
                    <TableCell key={index}>{cell}</TableCell>
                ))}
            </TableRow>
        ));
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpenModal}>
                Open Modal
            </Button>
            <Modal open={openModal} onClose={handleCloseModal}>
                <div style={modalStyles}>
                    <div {...getRootProps()} style={dropzoneStyles}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop an Excel file here, or click to select one</p>
                    </div>
                    <Button variant="contained" color="primary" onClick={handleImport}>
                        Import Data
                    </Button>
                </div>
            </Modal>
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>EmployeeID</TableCell>
                            <TableCell>Employee Name</TableCell>
                            <TableCell>Employee Status</TableCell>
                            <TableCell>Joining Date</TableCell>
                            <TableCell>BirthDate</TableCell>
                            <TableCell>Skills</TableCell>
                            <TableCell>Salary Details</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {showData && dataImported ? renderTableCells() : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

const dropzoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '40px',
    textAlign: 'center',
    cursor: 'pointer',
    margin: '50px'
};

const modalStyles = {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    padding: 20,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

export default HomeScreen;
