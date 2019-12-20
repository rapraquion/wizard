import React from 'react';
import TextField from '@material-ui/core/TextField';

const segment = [
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

const size = [
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
    const [segment, setSegment] = React.useState('')
    const [size, setSize] = React.useState(0)

    const handleChangeSegment = event => {
        setSegment(event.target.value);
    };

    const handleChangeSize = event => {
        setSize(event.target.value);
    };

    return (
        <React.Fragment>
            <TextField
                id="standard-select-currency-native"
                select
                label="Number of Employees"
                value={segment}
                onChange={handleChangeSegment}
                SelectProps={{
                    native: true,
                }}
            >
            </TextField>
            <TextField
                id="standard-select-currency-native"
                select
                label="Number of Employees"
                value={size}
                onChange={handleChangeSize}
                SelectProps={{
                    native: true,
                }}
            >
            </TextField>
        </React.Fragment>
    );
}
