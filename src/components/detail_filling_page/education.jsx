
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import {Typography} from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';


function AddEducation(props){
//adding work experience by mapping
  const {register,}=props;

const {append,fields,remove}=useFieldArray({name:"Educations"})


return(<>
{fields.map((item,index)=>{return(<>
  <Typography variant='h6'  m={3}>
         Education Detail {index+2}
        </Typography>
<Grid key={item.id} container spacing={2}>
<Grid item xs={6}>
          <TextField id="filled-basic" label="Type" {...register(`Educations[${index}].Type`)} defaultValue={item.Job_Title} variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
         
        </Grid>
 
  
        <Grid item xs={6}>
          <TextField id="filled-basic" label="University" {...register(`Educations[${index}].University`)} defaultValue={item.Job_Title} variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Degree" {...register(`Educations[${index}].Degree`)} defaultValue={item.Organization}  variant="outlined"fullWidth />
        </Grid>

        <Grid item xs={6}>
          <TextField id="filled-basic" label="Start year" {...register(`Educations[${index}].Start_year`)} defaultValue={item.Start_Date}  variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="End year" {...register(`Educations[${index}].End_year`)} defaultValue={item.End_Date}  variant="outlined" fullWidth />
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
      
      <Button onClick={()=>{append({Type:"",University:"",Degree:"",Start_year:"",End_year:""})}}>Add Education</Button>
    </Stack>
        </Grid>
</>
  
)


}


 function Education() {
    const {register}=useFormContext()

  return (
    <Box sx={{ flexGrow: 1 }}>
         <Typography variant='h4'  m={3}>
         Education Detail
        </Typography>
        <Typography variant='h6'  m={3}>
        Education Detail 1
        </Typography>
        <Grid container spacing={2}>
<Grid item xs={6}>
          <TextField id="filled-basic" label="Type" {...register(`Type`)}  variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={6}>
         
        </Grid>
 
  
        <Grid item xs={6}>
          <TextField id="filled-basic" label="University" {...register(`University`)}  variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="Degree" {...register(`Degree`)}  variant="outlined"fullWidth />
        </Grid>

        <Grid item xs={6}>
          <TextField id="filled-basic" label="Start year" {...register(`Start_year`)}   variant="outlined" fullWidth/>
        </Grid>
        <Grid item xs={6}>
          <TextField id="filled-basic" label="End year" {...register(`End_year`)}   variant="outlined" fullWidth />
        </Grid>
       
     
        </Grid>
      <Grid item xs={12}>   <AddEducation register={register} /></Grid>

    </Box>
  );
}
export default  Education;








