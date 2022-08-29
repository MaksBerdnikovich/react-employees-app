import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import EmployeeItem from "./EmployeeItem";

const EmployeeList = (
    {
        data,
        deleteEmployee,
        increaseEmployee,
        riseEmployee
    }
) => {

    return (
        <Grid>
            <List>
                {data.map(item => <EmployeeItem
                    key={item.id}
                    {...item}
                    deleteEmployee={deleteEmployee}
                    increaseEmployee={increaseEmployee}
                    riseEmployee={riseEmployee}
                />)}
            </List>
        </Grid>
    )
}

export default EmployeeList