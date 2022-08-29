import {Box, Typography} from "@mui/material";

const EmployeeInfo = ({total, increase, rise}) => {
    return (
        <Box>
            <Typography variant="subtitle1">Total Employees: <b>{total}</b></Typography>
            <Typography variant="subtitle1">Award Employees: <b>{increase}</b></Typography>
            <Typography variant="subtitle1">Rise Employees: <b>{rise}</b></Typography>
        </Box>
    )
}

export default EmployeeInfo