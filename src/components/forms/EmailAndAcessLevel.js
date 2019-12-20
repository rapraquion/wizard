import React from 'react';
import TextField from '@material-ui/core/TextField';

const access = [
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

export default function EmailAndAccessLevel() {
    const [opt, setOpt] = React.useState('')

    const handleChange = event => {
        setOpt(event.target.value);
    };
    return (
        <React.Fragment >
            <TextField
                id="email"
                label="E-mail"
                name="email"
                style={{ margin: 10 }}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="standard-select-currency-native"
                select
                label="Type of Access"
                value={access}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
            >
                {access.map(option => (
                    console.log(option.data)
                    // <option key={option.value} value={option.value}></option>
                ))}
            </TextField>
        </React.Fragment >
    );
}