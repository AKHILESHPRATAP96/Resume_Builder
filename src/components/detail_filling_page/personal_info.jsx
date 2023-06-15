import * as React from 'react';

import Box from '@mui/material/Box';
import { useFormContext } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import {  TextField, Typography } from '@mui/material';



 function Personal_info() {

  const { register } = useFormContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant='h4'  m={3}>
        Personal Information
        </Typography>
      <Grid container spacing={2}>


        <Grid item xs={6}>
          <TextField id="filled-basic" label="First Name"{...register("First_Name",{ required: true })} variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Last Name" {...register("Last_Name")}  variant="outlined"fullWidth />
        </Grid>

        <Grid item xs={6}>
          <TextField id="filled-basic" label="Email"{...register("Email")} variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Mobile"{...register("Mobile")} variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="filled-basic" label="Address" {...register("Address")} variant="outlined" fullWidth multiline />
        </Grid>
        
     
        <Grid item xs={12}>
          <TextField id="filled-basic" label="Objective" {...register("Objective")} variant="outlined" multiline fullWidth/>
        </Grid>
      

      </Grid>
    </Box>
  );
}
export default  Personal_info;