import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ProdCards from './ProdCards';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import tree from "../resources/images/tree540.png";
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

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
      textAlign: "right",
      color: theme.palette.text.secondary,   
      overflow: "hidden",     
        
    },      
      footer: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        bottom:0
      },
  }));

  function HideOnScroll(props) {
    const { children} = props;
    const trigger = useScrollTrigger();  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

export default function Home(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const classes = useStyles();

    return (
        // <div>
        <div className={classes.root}> 
               
          <Grid container spacing={3} direction="row"
            justify="center"
            alignItems="center">

        <HideOnScroll {...props}>
            <AppBar>     
            <Grid item xs={12} lg={12} >
              <Paper className={classes.paper} >
              <span><img src={tree} alt='logo' width="152" height="auto" align="left"></img>
              </span>
                 <Hidden xsDown>
                        <Button color="primary">Main</Button>
                        <Button color="primary">Page two</Button>
                        <Button color="primary">Page tatu</Button>
                        <IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon />    </IconButton>
                 </Hidden>

                  <Hidden smUp>                        
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><DehazeIcon/></Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Main</MenuItem>
                            <MenuItem onClick={handleClose}>Page two</MenuItem>
                            <MenuItem onClick={handleClose}>Page tatu</MenuItem>
                            <MenuItem onClick={handleClose}><AddShoppingCartIcon /></MenuItem>
                        </Menu>
                </Hidden>
              </Paper>
            </Grid>
            </AppBar>
        </HideOnScroll> 
        <Grid item xs={12} lg={12} >
              <Paper className={classes.paper} >
              <span><img src={tree} alt='logo' width="152" height="auto" align="left"></img>
              </span>                 
              </Paper>
            </Grid>
            <ProdCards ></ProdCards>
          
          <Hidden smDown>
            <Grid item  xs={12} sm={12} lg={12} >
              <Paper className={classes.footer}>
              <IconButton color="secondary" aria-label="youtube"><YouTubeIcon/></IconButton>
              <IconButton color="secondary" aria-label="instagram"><InstagramIcon/></IconButton>
              <IconButton color="primary" aria-label="facebook"><FacebookIcon/></IconButton>
                  </Paper>
            </Grid>
        </Hidden>
        </Grid>
        </div>

        // {/* <div className={classes.ft} >
        
        // </div>
        // </div> */}
        
      );
}

