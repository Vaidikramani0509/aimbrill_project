import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const DownloadExcelButton = () => {
    const downloadExcelFile = () => {
        const data = [
            ['EmployeeID', 'EmployeeName', 'EmployeeStatus', 'Skills', 'salaryDetails', 'Address', 'Role'],
            [5, "John", 'ACTIVE OR INACTIVE', 'react.js', 100000, 'Ahmedabad', 'MANAGER OR DEVELOPER'],

        ];

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(file, 'example.xlsx');
    };

    return (
        <div style={{ color: 'blue', display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: 'smaller' }} onClick={downloadExcelFile}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                <path d="M8 11a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5z" />
                <path d="M11.354 9.854a.5.5 0 0 1 0 .707l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 12.293l2.646-2.647a.5.5 0 0 1 .708 0z" />
                <path fill-rule="evenodd" d="M4 13a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4zm8-1V4H4v8h8z" />
            </svg>
            Download Template
        </div>
    );
};

export default DownloadExcelButton;
