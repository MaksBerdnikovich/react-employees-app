import {Button, ButtonGroup} from "@mui/material";

const EmployeeFilter = ({filter, filteredEmployee}) => {
    const btns = [
        {name: 'all', label: 'All'},
        {name: 'rise', label: 'Rise'},
        {name: 'increase', label: 'Awards'},
        {name: 'salary', label: 'Salary > 1000$'},
    ]

    return (
        <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
                mt: 2,
                boxShadow: 'none'
            }}>
            {
                btns.map(btn => {
                    return <Button
                        key={btn.name}
                        variant={btn.name === filter ? 'contained' : 'outlined'}
                        onClick={() => filteredEmployee(btn.name)}
                        sx={{textTransform: "capitalize"}}>
                        {btn.label}
                    </Button>
                })
            }
        </ButtonGroup>
    )
}

export default EmployeeFilter