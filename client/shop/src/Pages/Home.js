import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ProdCards from './ProdCards';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:"95%",
      margin:"auto"
    },
    ft: {
        position: "fixed",
        bottom: 0, 
        width:"95%",
        left: "50%",
        transform: "translateX(-50%)"
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
        bottom:0
      },
  }));


export default function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const classes = useStyles();

    return (
        <div>
        <div className={classes.root}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} lg={12} >
              <Paper className={classes.paper}>
                  <Hidden smUp>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <DehazeIcon/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                </Hidden>
              </Paper>
            </Grid>
            <ProdCards></ProdCards>
          </Grid>
        </div>
        <div className={classes.ft} >
        <Hidden smDown>
            <Grid item  xs={12} sm={12} lg={12} >
              <Paper className={classes.footer}>Footer</Paper>
            </Grid>
        </Hidden>
        </div>
        </div>
        
      );
}

