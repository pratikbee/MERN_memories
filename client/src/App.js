import React,{useEffect, useState} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts';

const App=()=>{
    const [currentId,setCurrentId]=useState(null);
    const classes=useStyles();
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getPosts())},[dispatch])
   return( 
   <Container maxWidth="lg">
       <AppBar className={classes.appBar} position='static' color="inherit">
            <img className={classes.image} src={require("./Image/heart.png")} alt="memories" height="60"/>
           <Typography className={classes.heading} variant='h2' align="center" >
               Memories
           </Typography>
           <img className={classes.image} src={require("./Image/heart.png")} alt="memories" height="60"/>
           

       </AppBar>
       <Grow in>
           <Container>
            <Grid className={classes.mainContainer} container  justifyContent='space-between' alignItems='stretch' spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId}> </Posts>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId}  setCurrentId={setCurrentId} ></Form>
                </Grid>
            </Grid>
            </Container>
       </Grow>
   </Container>
    )
}

export default App;