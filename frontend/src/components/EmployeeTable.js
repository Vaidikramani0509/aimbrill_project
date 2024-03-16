import React from "react";
import { useQuery, gql } from "@apollo/client";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";

const GET_EMPLOYEES = gql`
  query {
    findManyEmployees {
      employeeid
      employeename
      address
      employeestatus
      skills
      salarydetails
      role
    }
  }
`;

const columns = [
  { field: "employeeid", headerName: "Employee ID", width: 150 },
  { field: "employeename", headerName: "Employee Name", width: 150 },
  { field: "employeestatus", headerName: "Employee Status", width: 200 },
  { field: "skills", headerName: "Skills", width: 200 },
  { field: "salarydetails", headerName: "Salary Details", width: 200 },
  { field: "address", headerName: "Address", width: 200 },
  { field: "role", headerName: "Role", width: 200 },
];

export default function EmployeeTable({ handleOpenModal }) {
  const { data, loading, error } = useQuery(GET_EMPLOYEES);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  const formattedData = data.findManyEmployees.map((employee, index) => ({
    id: index + 1,
    ...employee,
  }));

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%" }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", marginBottom: "25px", marginTop: '50px'
        }}>
          <h4 style={{ textAlign: "center", padding: "10px", }}>Employee Details</h4>
          <Button variant="outlined" color="primary" onClick={handleOpenModal} > ADD DETAILS +</Button>
        </div>
        <div style={{ height: 400, width: "100%", textAlign: "center" }}>
          <DataGrid
            rows={formattedData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            components={{
              Toolbar: GridToolbar,
            }}
            density="compact"
            componentsProps={{
              toolbar: {
                exportButton: true,
                filterButton: true,
                densitySelector: true,
                refreshButton: true,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
