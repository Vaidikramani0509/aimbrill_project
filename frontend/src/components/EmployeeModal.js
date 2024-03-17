import { Dialog, DialogTitle, DialogContent, TextField, Button, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    dialog: {
        minWidth: 400,
    },
    form: {
        display: "grid",
        gap: theme.spacing(2),
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

export default function EmployeeModal({ employee, handleCloseModal, handleSaveChanges }) {
    const classes = useStyles();
    const [updatedEmployee, setUpdatedEmployee] = useState({ ...employee });

    const handleChange = (event) => {
        setUpdatedEmployee({
            ...updatedEmployee,
            [event.target.name]: event.target.value,
        });
    };
    const employeeStatusOptions = ["ACTIVE", "INACTIVE"]
    const employeeRoleOptions = ["MANAGER", "DEVELOPER"]
    return (
        <Dialog open={true} onClose={handleCloseModal} className={classes.dialog}>
            <DialogTitle>Edit Employee</DialogTitle>
            <DialogContent>
                <form className={classes.form}>
                    <TextField
                        label="Employee Name"
                        name="employeename"
                        value={updatedEmployee.employeename}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <TextField
                        label="Address"
                        name="address"
                        value={updatedEmployee.address}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <Select
                        label="Employee Status"
                        name="employeestatus"
                        value={updatedEmployee.employeestatus}
                        onChange={handleChange}
                        variant="outlined"
                    >
                        {employeeStatusOptions.map((option) => (

                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField
                        label="Skills"
                        name="skills"
                        value={updatedEmployee.skills}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <TextField
                        label="SalaryDetails"
                        name="salarydetails"
                        value={updatedEmployee.salarydetails}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <Select
                        label="Role"
                        name="role"
                        value={updatedEmployee.role}
                        onChange={handleChange}
                        variant="outlined"
                    >
                        {employeeRoleOptions.map((option) => (

                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button
                        className={classes.button}
                        variant="contained"
                        onClick={() => handleSaveChanges(updatedEmployee)}
                    >
                        Save Changes
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
