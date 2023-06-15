import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import {Typography} from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';


function Addexperience(props){
//adding work experience by mapping
  const {register,}=props;
 
const {append,fields,remove}=useFieldArray({name:"experiences"})


return(<>
{fields.map((item,index)=>{return(<>

  <Typography variant='h6'  m={3}>
         Experience {index+2}
        </Typography>
<Grid key={item.id} container spacing={2}>
 
  
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Job Title" {...register(`experiences[${index}].Job_Title`)} defaultValue={item.Job_Title} variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Organization" {...register(`experiences[${index}].Organization`)} defaultValue={item.Organization}  variant="outlined"fullWidth />
        </Grid>

        <Grid item xs={6}>
          <TextField id="filled-basic" label="Start Date" {...register(`experiences[${index}].Start_Date`)} defaultValue={item.Start_Date}  variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="End Date" {...register(`experiences[${index}].End_Date`)} defaultValue={item.End_Date}  variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
       
        <Stack direction="row" spacing={2} justifyContent="right">
      
      <Button variant='contained' color='error' onClick={()=>{remove(index)}}>Remove</Button>
    </Stack>
        </Grid>
        
   
      </Grid>
      
      
      </>)})}

      <Grid item xs={12}>
       
        <Stack direction="row" spacing={2} justifyContent="center">
      
      <Button onClick={()=>{append({Job_Title:"",Organization:"",Start_Date :"",End_Date:""})}}>Add New</Button>
    </Stack>
        </Grid>
</>
  
)


}


 function Work_info(props) {
    const {register,handleSubmit,}=useFormContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
         <Typography variant='h4'  m={3}>
        Work Experience
        </Typography>
        <Typography variant='h6'  m={3}>
         Experience 1
        </Typography>
      <Grid container spacing={2}>
        
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Job Title" {...register(`Job_Title`)} variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Organization" {...register(`Organization`)} variant="outlined"fullWidth />
        </Grid>

        <Grid item xs={6}>
          <TextField id="filled-basic" label="Start Date" {...register(`Start_Date`)} variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="End Date" {...register(`End_Date`)} variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Grid item xs={12}>   <Addexperience register={register} /></Grid>

    </Box>
  );
}
export default  Work_info;






