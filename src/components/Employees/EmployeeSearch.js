import {Component} from "react";
import {TextField} from "@mui/material";

class EmployeeSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    onChangeHandler = (e) => {
        const {searchEmployee} = this.props

        const term = e.target.value
        this.setState({term})
        searchEmployee(term)
    }

    render() {
        return (
            <TextField
                label="Search"
                variant="outlined"
                size="small"
                focused
                onChange={this.onChangeHandler}
            />
        )
    }
}

export default EmployeeSearch

