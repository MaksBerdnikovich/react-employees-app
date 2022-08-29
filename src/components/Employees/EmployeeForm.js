import {Component} from "react";
import {Box, TextField, Button} from "@mui/material";

class EmployeeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: '',
            nameValid: true,
            salaryValid: true,
        }
    }

    onChangeNameHandler = (e) => {
        this.setState({
            name: e.target.value.replace(/[^a-z 0-9]/ig, ''),
            nameValid: e.target.value.length > 5,
        })
    }

    onChangeSalaryHandler = (e) => {
        this.setState({
            salary: e.target.value.replace(/[^0-9]/ig, ''),
            salaryValid: e.target.value > 100
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()

        const {addEmployee} = this.props
        const {name, salary, nameValid, salaryValid} = this.state

        if (name === '' || salary === '') return

        if (nameValid && salaryValid) {
            addEmployee(name, salary)
            this.setState({
                name: '',
                salary: '',
                nameValid: true,
                salaryValid: true,
            })
        }
    }

    render() {
        const {name, salary, nameValid, salaryValid} = this.state

        return (
            <Box
                component="form"
                autoComplete="off"
                onSubmit={this.onSubmitHandler}
                sx={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    flexGrow: 1,
                }}>
                <TextField
                    variant="outlined"
                    size="small"
                    value={name}
                    label={nameValid ? "Name" : "Name > 5 symbols"}
                    error={!nameValid}
                    onChange={this.onChangeNameHandler}
                    focused
                    sx={{m: 2, flexGrow: 1}}
                />
                <TextField
                    variant="outlined"
                    size="small"
                    value={salary}
                    label={salaryValid ? "Salary ($)" : "Salary > 100$"}
                    error={!salaryValid}
                    onChange={this.onChangeSalaryHandler}
                    focused
                    sx={{m: 2, flexGrow: 1}}
                />
                <Button
                    variant="contained"
                    size="small"
                    type="submit"
                    sx={{m: 2, flexGrow: 1}}
                >
                    Add Employee
                </Button>
            </Box>
        );
    }
}

export default EmployeeForm
