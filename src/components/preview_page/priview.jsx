import { useSelector } from "react-redux";
import DrawerAppBar from "../navbar/navbar";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, Container, Stack, Typography, Box } from "@mui/material";
import Template1 from "../homepage/template1";
import Template2 from "../homepage/template2";
import Template3 from "../homepage/template3";
import Template4 from "../homepage/template4";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../preview_page/preview.css";
import back from "../image/det.jpg"

import { TEMPLATE_1, TEMPLATE_2, TEMPLATE_3, TEMPLATE_4 } from "../../constant/actiontype";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 8,
}));

function Previewpage() {
  const input = useSelector((state) => state.updateinfos);
  const Template = useSelector((state) => state.Sel_Temp);

  const generatePDF = () => {
    let element = "";

    if (Template === TEMPLATE_1) element = document.getElementById("Temp1");
    else if (Template === TEMPLATE_2) element = document.getElementById("Temp2");
    else if (Template === TEMPLATE_3) element = document.getElementById("Temp3");
    else if (Template === TEMPLATE_4) element = document.getElementById("Temp4");

    html2canvas(element).then((canvas) => {
      const pdf = new jsPDF("p", "pt", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, width, height, '', 'FAST');
      pdf.save("Resume.pdf");
    });
  };

  return (
    <div style={{ position: "relative"}}>
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

      <Container
        sx={{
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 8 },
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
        className="preview-container"
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          className="preview-header-title"
          sx={{ textTransform: "uppercase", mb: 2 }}
        >
          Resume Preview
        </Typography>

        <Box
          sx={{
            // width: "100%",
            // maxWidth: "800px",
            mx: "auto",
            // overflowX: "auto",
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#fff",
            // p: 2,
            gap:1
          }}
          id="previewresume"
        >
          {Template === TEMPLATE_1 && <Item id="Temp1"><Template1 input={input} /></Item>}
          {Template === TEMPLATE_2 && <Item id="Temp2"><Template2 input={input} /></Item>}
          {Template === TEMPLATE_3 && <Item id="Temp3"><Template3 input={input} /></Item>}
          {Template === TEMPLATE_4 && <Item id="Temp4"><Template4 input={input} /></Item>}
        </Box>

        <Stack direction="column" spacing={2} alignItems="center" justifyContent="center">
          <Typography variant="h5">Download your resume</Typography>
          <Button variant="contained" size="large" onClick={generatePDF}>
            Download
          </Button>
        </Stack>
      </Container>
    </div>
    </div>
  );
}

export default Previewpage;