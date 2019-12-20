import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    title: {
        display: 'flex',
        justifyContent: 'center',
        margin: 10,
        color: '#586069',
    }
});

export const Step = ({ title, children }) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.title}>
                <h2>{title}</h2>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}