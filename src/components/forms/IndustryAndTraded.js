import React from 'react';
import TextField from '@material-ui/core/TextField';

const numEmployees = [
    {
        value: 'Select an option',
        label: 'Selection'
    },
    {
        value: 'Admin',
        label: 'Administrator'
    },
    {
        value: 'Employee',
        label: 'Employee'
    }
];

export default function BusinessInfo() {
    const [num, setNum] = React.useState(0)

    const handleChange = event => {
        setNum(event.target.value);
    };

    return (
        <React.Fragment>
            <TextField
                id="standard-select-currency-native"
                select
                label="Number of Employees"
                value={numEmployees}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
            >
                {numEmployees.map(option => (
                    console.log(option.data)
                    // <option key={option.value} value={option.value}></option>
                ))}
            </TextField>
            <TextField
                id="pnumber"
                type="number"
                label="Phone Number"
                name="pnumber"
                margin="normal"
                variant="outlined"
            />
        </React.Fragment>
    );
}
