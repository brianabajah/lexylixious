import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
}));

export default function ProdCards() {
    var cData={"data":[
        {
            "title":"",
            "img":"",
            "description":""
        },{},{},{}
    ]};
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} lg={12}>
              {/* <Paper className={classes.banner}>Banner</Paper> */}
            </Grid>

            {cData.data.map((d)=>{
                return (<Grid item xs={12} sm={12} md={6} lg={6}>
                <Paper className={classes.card}>Product Card</Paper>
              </Grid> )
            })}
            
        </>
    )
}
