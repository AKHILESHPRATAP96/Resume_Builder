import { useSelector } from "react-redux";
import DrawerAppBar from "../navbar/navbar";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Stack, TextField, Typography } from "@mui/material";
import Template1 from "../homepage/template1";
import Template2 from "../homepage/template2";
import Template3 from "../homepage/template3";
import Template4 from "../homepage/template4";
import jsPDF from "jspdf";


import html2canvas from 'html2canvas';
import { TEMPLATE_1,TEMPLATE_2,TEMPLATE_3,TEMPLATE_4 } from "../../constant/actiontype";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Previewpage(){
  let input=useSelector(state=>state.updateinfos)
 let Template=useSelector(state=>state.Sel_Temp)
 console.log(Template,"this is selected")
  const generatePDF =  () => {
    var element="";
    // Get the JSX template element
    if(Template===TEMPLATE_1){
     element = document.getElementById("Temp1");}
    else if(Template===TEMPLATE_2){
      element = document.getElementById("Temp2");}
      else if(Template===TEMPLATE_3){
         element = document.getElementById("Temp3");}
        else if(Template===TEMPLATE_4){
          element = document.getElementById("Temp4");}


  
    // Convert the JSX template to a canvas using html2canvas
    html2canvas(element).then(canvas => {
      // Create a new PDF instance
      const pdf = new jsPDF("l","mm","a4");
     
  
      // Calculate the width and height of the PDF document
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
  
      // Add the canvas image to the PDF document
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, width, height);
  
      // Save the PDF document
      pdf.save('Resume.pdf');
    });
  };
  
  return (
    <>
    <DrawerAppBar/>
    <Box sx={{ flexGrow: 1 }}>
      

       <Stack  sx={{
        padding: {
          xs: "40px 20px",
          md: "60px 80px",
        }}}  >
         {(Template==TEMPLATE_1)&&<Item><Template1 input={input}/></Item>}
        {(Template==TEMPLATE_2)&&<Item><Template2 input={input}/></Item>}
       { (Template==TEMPLATE_3)&&<Item><Template3 input={input}/></Item>}
        {(Template==TEMPLATE_4)&&<Item><Template4 input={input}/></Item>}
        </Stack>
     ()
       <Stack justifyContent="center" alignItems="center"> <Button variant="contained"  onClick={generatePDF} >Download</Button></Stack>

        
        
      
     
    </Box>
    </>
  )
    




}

export default Previewpage;



