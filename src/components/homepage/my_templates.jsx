
import DrawerAppBar from '../navbar/navbar';
import Te1 from "../image/T1.png"
import Te2 from "../image/T2.png"
import Te3 from "../image/T3.png"
import Te4 from "../image/T4.png"


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import "./mytemplate.css"
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { T1, T2, T3, T4 } from "../../state/action";
import { useDispatch, useSelector } from 'react-redux';

import back from "../image/back.jpg"






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 15
}));

const resumeStyle = {
  borderRadius: 10, width: "90%", border: "1px solid rgb(0,0,0,0.1)",
  boxShadow: "1px 5px 5px rgb(0,0,0,0.1)",
}

//selected template will redirect page to detail filling page
function Mytemplates() {

  const dispatch = useDispatch();


  return (
    <div style={{ position: "relative", height: "100vh" }}>


      <div style={{
        backgroundImage: `url(${back})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.2,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 2 }}>


        <DrawerAppBar />


        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}  >
          <div>


            <Typography component="span" fontFamily="serif" color="grey" variant='h3' sx={{ textShadow: "0px 5px 4px rgb(0,0,0,0.1)" }} >Choose </Typography>
            <Typography component="span" fontFamily="serif" color="deepskyblue" variant='h3' sx={{ textShadow: "0px 5px 4px rgb(0,0,0,0.1)" }}> Template</Typography>
          </div>
          <Grid container spacing={3} px={5}  >

            <Grid item xs={12} sm={6} md={3} sx={{
              transition: "transform 0.4s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              }
            }}>
              <Link to="/det"><img style={resumeStyle} id="con" className='Item' onClick={() => { dispatch(T1()) }} src={Te1} alt='Template1' /></Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{
              transition: "transform 0.4s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              }
            }}>
              <Link to="/det"><img style={resumeStyle} id="con" onClick={() => { dispatch(T2()) }} className='Item' src={Te2} alt='Template2' /></Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{
              transition: "transform 0.4s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              }
            }}>
              <Link to="/det"><img style={resumeStyle} id="con" className='Item' onClick={() => { dispatch(T3()) }} src={Te3} alt='Template3' /></Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{
              transition: "transform 0.4s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              }
            }}>

              <Link to="/det"><img style={resumeStyle} id="con" className='Item' onClick={() => { dispatch(T4()) }} src={Te4} alt='Template4' /></Link>

            </Grid>
            <Grid item md={12} sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#888",
              fontSize: "1.2rem",
              fontStyle: "italic",
            }}>
              More templates coming soon...
            </Grid>
          </Grid>


        </Box>




      </div>
    </div>)
}
export default Mytemplates;


