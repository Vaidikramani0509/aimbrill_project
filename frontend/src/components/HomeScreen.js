import React, { useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { useMutation } from '@apollo/client';
import * as mutations from '../models/mutations'
import EmployeeTable, { GET_EMPLOYEES } from './EmployeeTable';
import DownloadExcelButton from './ExcelFile';

function HomeScreen() {
    const [excelData, setExcelData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [fileName, setFileName] = useState('');

    const [error, setError] = useState('');
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file.type !== 'application/vnd.ms-excel' && file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            setError('Please upload an Excel file.');
            return;
        }
        setFileName(file.name);
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            setExcelData(excelData);
            setError('')
        };
        reader.readAsArrayBuffer(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const [updateEmployee] = useMutation(mutations.UPDATE_EMPLOYEE, {
        refetchQueries: [{ query: GET_EMPLOYEES }]
    })

    const handleImport = async () => {
        try {
            for (let i = 1; i < excelData.length; i++) {
                const rowData = excelData[i];
                await updateEmployee({
                    variables: {
                        data: {
                            employeeid: rowData[0],
                            employeename: rowData[1],
                            employeestatus: rowData[2],
                            skills: rowData[3],
                            salarydetails: rowData[4],
                            address: rowData[5],
                            role: rowData[6]
                        }
                    }
                });
            }
            setOpenModal(false);
            setExcelData([]);
            setFileName('');
        } catch (error) {
            console.error('Error importing data:', error);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    return (
        <div>
            <Modal open={openModal} onClose={handleCloseModal}>
                <div style={modalStyles}>
                    <div>Import Items</div>
                    <div {...getRootProps()} style={dropzoneStyles}>
                        <input {...getInputProps()} />
                        {fileName && <p>File: {fileName}</p>}
                        <p>Drag 'n' drop an Excel file here, or click to select one</p>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div style={{ display: 'flex', fontSize: 'smaller' }}>
                        <p style={{ fontSize: 'smaller' }}>Importing requires Microsoft Excel .xlsx format </p>
                        <span><DownloadExcelButton /></span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined" color="primary" onClick={handleCloseModal}>
                            cancle
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleImport}>
                            Import
                        </Button>
                    </div>
                </div>
            </Modal >
            {(
                <div><EmployeeTable handleOpenModal={handleOpenModal} /></div>
            )
            }

        </div >
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
