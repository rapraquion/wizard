import React from 'react';

// card
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

// router
import { Switch, Route, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

// forms
import Name from './forms/Name';
import EmailAndAcessLevel from './forms/EmailAndAcessLevel';
import BusinessNameAndAddress from './forms/BusinessNameAndAddress';
import BusinessInfo from './forms/BusinessInfo'
import IndustryAndTraded from './forms/IndustryAndTraded'
import CustomerSegmentAndSize from './forms/CustomerSegmentAndSize'

// components
import { Step } from './Step'

const useStyles = makeStyles({
    card: {
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        flexDirection: 'column',
        minWidth: 275,
        width: '50%',
        height: '100%',
        padding: 10,
        display: 'flex',
        justifyContent: 'space-around'
    },
    carddiv: {
        display: 'flex',
        justifyContent: 'center',
        margin: 5
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        margin: 20
    }
});

export default function Onboarding() {
    const { path } = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.title}>
                <h1>Onboarding</h1>
            </div>
            <div className={classes.carddiv}>
                <Switch>
                    <Card className={classes.card}>
                        <Route path={`${path}/step-1`}>
                            <Step title="Step-1: Name Info">
                                <Name />
                            </Step>
                        </Route>
                        <Route path={`${path}/step-2`}>
                            <Step title="Step-2: Email And Access Level">
                                <EmailAndAcessLevel />
                            </Step>
                        </Route>
                        <Route path={`${path}/step-3`}>
                            <Step title="Step-3: Business Name">
                                <BusinessNameAndAddress />
                            </Step>
                        </Route>
                        <Route path={`${path}/step-4`}>
                            <Step title="Step-4: Business Info">
                                <BusinessInfo />
                            </Step>
                        </Route>
                        <Route path={`${path}/step-5`}>
                            <Step title="Step-5: Industry">
                                <IndustryAndTraded />
                            </Step>
                        </Route>
                        <Route path={`${path}/step-6`}>
                            <Step title="Step-6: Customer Segment & Ideal Size">
                                <CustomerSegmentAndSize />
                            </Step>
                        </Route>
                    </Card>
                </Switch>
            </div >
        </React.Fragment >
    );
}

{/* <CardContent>

</CardContent>
<CardActions>
    <div className={classes.buttons}>
        <Button size="small">Back</Button>
        <Button size="small">Next</Button>
    </div>
</CardActions> */}