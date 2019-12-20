import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function BusinessNameAndAdress() {
    return (
        <React.Fragment>
            <TextField
                id="bname"
                label="Name of Business"
                name="bname"
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="baddress"
                label="Business Address"
                name="baddress"
                margin="normal"
                variant="outlined"
            />
        </React.Fragment>
    );
}