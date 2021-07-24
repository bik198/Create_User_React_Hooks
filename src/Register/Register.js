import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import StepperForm from './StepperForm'

const useStyles = makeStyles(theme => ({
    logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5rem',
        color: 'blue',
        fontWeight: 'bold'
    },
    paperLayout: {
        padding: '2rem',
        [theme.breakpoints.up('md')]: {
            width: '35em'
        },
        marginTop: '5rem',
        margin: 'auto',
        border: '1px solid red',
        borderRadius: '4px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '3rem'
        }
    },
}));

export default function Register() {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.topLayout}
            >
                <Grid item md={11} xs={11}>
                    <Paper className={classes.paperLayout}>
                        <Grid container>
                            <Grid item md={12} xs={12}>
                                <div className={classes.logo}>
                                    <div className={classes.border}>
                                        2 Step UI Wizard to Create User
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <StepperForm/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
}
