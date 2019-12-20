import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Name() {
    return (
        <React.Fragment>
            <TextField
                id="fname"
                label="First Name"
                name="fname"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="lname"
                label="Last Name"
                name="lname"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="title"
                label="Job Title"
                name="title"
                margin="normal"
                helperText="Optional"
                variant="outlined"
            />
        </React.Fragment>
    );
}