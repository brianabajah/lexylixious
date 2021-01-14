import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    banner: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      footer: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Paper className={classes.paper}>MENU</Paper>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Paper className={classes.banner}>Banner</Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paper className={classes.card}>Product Card</Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paper className={classes.card}>Product Card</Paper>
            </Grid>
            <Hidden smDown>
            <Grid item  xs={12} sm={12} lg={12}>
              <Paper className={classes.footer}>Footer</Paper>
            </Grid>
            </Hidden>
          </Grid>
        </div>
      );
}
