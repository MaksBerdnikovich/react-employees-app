import {Component} from "react";
import {Box, Typography} from "@mui/material";
import { v4 as uuidv4 } from 'uuid';

import EmployeeInfo from "./components/Employees/EmployeeInfo";
import EmployeeForm from "./components/Employees/EmployeeForm";
import EmployeeSearch from "./components/Employees/EmployeeSearch";
import EmployeeFilter from "./components/Employees/EmployeeFilter";
import EmployeeList from "./components/Employees/EmployeeList";
import './App.css'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {id: 1, name: 'John Smith', salary: 1000, increase: true, rise: false},
                {id: 2, name: 'Ava Robinson', salary: 1500, increase: false, rise: true},
                {id: 3, name: 'Jackie Jackson', salary: 500, increase: false, rise: false},
            ],
            term: '',
            filter: 'all'
        }
    }

    getEmployeeCount = (type) => {
        const {data} = this.state
        return data.filter(item => type === 'increase' ? item.increase : item.rise).length
    }

    addEmployeeHandler = (name, salary) => {
        const newItem = {
            id: uuidv4(),
            name: name,
            salary: salary,
            increase: false,
            rise: false
        }

        this.setState(({data}) => ({
            data: [...data, newItem]
        }))
    }

    deleteEmployeeHandler = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    increaseEmployeeHandler = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    riseEmployeeHandler = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) return items

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    searchEmployeeHandler = (term) => {
        this.setState({term})
    }

    filterEmployee = (items, filter) => {
        switch (filter) {
            case 'rise' :
                return items.filter(item => item.rise === true)
            case 'increase' :
                return items.filter(item => item.increase === true)
            case 'salary' :
                return items.filter(item => item.salary > 1000)
            default :
                return items
        }
    }

    filteredEmployeeHandler = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const filteredData = this.filterEmployee(this.searchEmployee(data, term), filter)

        return (
            <div className="App">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: `rgba(255, 255, 255, 0.1)`,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: `10px`,
                    p: 2
                }}>
                    <Typography variant="h4" component="h1" sx={{mb: 2, color: 'primary.main'}}>
                        Employee Accounting App
                    </Typography>

                    <EmployeeInfo
                        total={data.length}
                        increase={this.getEmployeeCount('increase')}
                        rise={this.getEmployeeCount('rise')}
                    />
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: `rgba(255, 255, 255, 0.1)`,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: `10px`,
                    p: 2, mt: 3
                }}>
                    <EmployeeSearch searchEmployee={this.searchEmployeeHandler}/>
                    <EmployeeFilter filter={filter} filteredEmployee={this.filteredEmployeeHandler}/>
                </Box>

                <Box sx={{mt: 2}}>
                    {
                        filteredData.length > 0
                            ? (
                                <EmployeeList
                                    data={filteredData}
                                    deleteEmployee={this.deleteEmployeeHandler}
                                    increaseEmployee={this.increaseEmployeeHandler}
                                    riseEmployee={this.riseEmployeeHandler}
                                />
                            )
                            : (
                                <Typography variant="h5" component="h5" sx={{
                                    m: 5,
                                    textAlign: 'center',
                                    color: 'secondary.light'
                                }}>
                                    Employee list is empty !
                                </Typography>
                            )
                    }
                </Box>

                <Box sx={{
                    backgroundColor: `rgba(255, 255, 255, 0.1)`,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: `10px`,
                    mt: 3
                }}>
                    <Typography variant="h6" component="h6" sx={{m: 2}}>Add a new employee</Typography>
                    <EmployeeForm
                        addEmployee={this.addEmployeeHandler}
                    />
                </Box>
            </div>
        )
    }
}

export default App
