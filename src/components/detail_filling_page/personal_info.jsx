import * as React from 'react';

import Box from '@mui/material/Box';
import { useFormContext,Controller } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import {  TextField, Typography } from '@mui/material';




 function Personal_info() {
 

  const { register,formState: { errors }} = useFormContext()
  
  
  
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <Typography variant='h4'  m={3}>
        Personal Information
        </Typography>
      <Grid container spacing={2}>


        <Grid item xs={6}>
         
          <TextField
         
          id="filled-basic" label="First Name" {...register("First_Name",{ required: true })} variant="outlined" fullWidth
         />
          {errors.First_Name && <span>*This field is required*</span>}
          
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Last Name" {...register("Last_Name")}  variant="outlined"fullWidth />
        </Grid>
        

        <Grid item xs={6}>
          <TextField id="filled-basic" label="Email"{...register("Email",{ required: true })} variant="outlined" fullWidth/>
          {errors.Email && <span>*This field is required*</span>}
        </Grid>
       
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Mobile"{...register("Mobile",{ required: true })} variant="outlined" fullWidth />
          {errors.Mobile && <span>*This field is required*</span>}
        </Grid>
        <Grid item xs={12}>
          <TextField id="filled-basic" label="Address" {...register("Address",{ required: true })} variant="outlined" fullWidth multiline />
          {errors.Address && <span>*This field is required*</span>}
        </Grid>
        
     
        <Grid item xs={12}>
          <TextField id="filled-basic" label="Objective" {...register("Objective",{ required: true })} variant="outlined" multiline fullWidth/>
          {errors.Objective && <span>*This field is required*</span>}
        </Grid>
      

      </Grid>
    </Box>
  );
}
export default  Personal_info;