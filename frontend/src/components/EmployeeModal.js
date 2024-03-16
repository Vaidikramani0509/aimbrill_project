import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { useState } from "react";

export default function EmployeeModal({ employee, handleCloseModal, handleSaveChanges }) {
    const [updatedEmployee, setUpdatedEmployee] = useState(employee);

    const handleChange = (event) => {
        setUpdatedEmployee({
            ...updatedEmployee,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <Dialog open={true} onClose={handleCloseModal}>
                <DialogTitle>Edit Employee</DialogTitle>
                <DialogContent>
                    <div
                    >
                        <h4>Edit Employee</h4>
                        <form>
                            <div>
                                <label htmlFor="employeename">Employee Name:</label>
                                <input
                                    type="text"
                                    name="employeename"
                                    value={updatedEmployee.employeename}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="address">Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={updatedEmployee.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="employeestatus">Employee Status:</label>
                                <input
                                    type="text"
                                    name="employeestatus"
                                    value={updatedEmployee.employeestatus}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="skills">Skills:</label>
                                <input
                                    type="text"
                                    name="skills"
                                    value={updatedEmployee.skills}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="salarydetails">SalaryDetails:</label>
                                <input
                                    type="text"
                                    name="salarydetails"
                                    value={updatedEmployee.salarydetails}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="role">Role:</label>
                                <input
                                    type="text"
                                    name="role"
                                    value={updatedEmployee.role}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="button" onClick={() => handleSaveChanges(updatedEmployee)}>
                                Save Changes
                            </button>
                        </form>
                    </div>
                </DialogContent>
            </Dialog >
        </div>
    );
};