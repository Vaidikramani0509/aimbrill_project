import React, { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import * as mutations from "../models/mutations";
import EmployeeModal from "./EmployeeModal";
import "react-toastify/dist/ReactToastify.css";
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

export default function EmployeeTable({ handleOpenModal }) {
  const { data, loading, error } = useQuery(GET_EMPLOYEES);
  const [removeEmployee] = useMutation(mutations.DELETE_ONE_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }]
  });
  const [updateEmployeeData] = useMutation(mutations.UPDATE_ONE_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }]
  });
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleDelete = (employeeId) => {
    removeEmployee({ variables: { where: { employeeid: employeeId } } })
      .then(() => {
        toast.success("Employee deleted successfully", { className: 'toast-success' });
      })
      .catch(() => {
        toast.error("Error !", { className: 'toast-error' });
      });
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };
  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

  const handleSaveChanges = (updatedEmployee) => {
    updateEmployeeData({
      variables: {
        where: {
          employeeid: updatedEmployee.employeeid,
        },
        data: {
          employeename: updatedEmployee.employeename,
          address: updatedEmployee.address,
          employeestatus: updatedEmployee.employeestatus,
          skills: updatedEmployee.skills,
          salarydetails: updatedEmployee.salarydetails,
          role: updatedEmployee.role,
        },
      },
    })
      .then(() => {
        console.log(`successfully updated employee ${updatedEmployee.employeeid}`);
        toast.success("Employee data updated successfully");
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
        toast.error("Error updating employee");
      });
  };

  const columns = [
    { field: "employeeid", headerName: "Employee ID", width: 150 },
    { field: "employeename", headerName: "Employee Name", width: 150 },
    { field: "employeestatus", headerName: "Employee Status", width: 200 },
    { field: "skills", headerName: "Skills", width: 200 },
    { field: "salarydetails", headerName: "Salary Details", width: 200 },
    { field: "address", headerName: "Address", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleEdit(params.row)}
        >
          Edit
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleDelete(params.row.employeeid)}
        >
          Delete
        </Button>
      ),
    },
  ];

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  const formattedData = data.findManyEmployees.map((employee, index) => ({
    id: index + 1,
    ...employee,
  }));

  return (
    <>
      <ToastContainer position="top-right" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              marginBottom: "25px",
              marginTop: "50px",
            }}
          >
            <h4 style={{ textAlign: "center", padding: "10px" }}>
              Employee Details
            </h4>
            <Button variant="outlined" color="primary" onClick={handleOpenModal}>
              ADD DETAILS +
            </Button>
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
            />
          </div>
          {selectedEmployee && (
            <EmployeeModal
              employee={selectedEmployee}
              handleCloseModal={handleCloseModal}
              handleSaveChanges={handleSaveChanges}
            />
          )}
        </div>
      </div>
    </>
  );
}