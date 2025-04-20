import * as React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import KeyIcon from '@mui/icons-material/Key';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: '#fff',
  borderRadius: 8,
  // boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
}));

function Template3({ input }) {
  const { Educations = [], experiences = [], KeySkills = [] } = input;

  return (
    <Box sx={{ width: '210mm', height: '297mm', p: 3, backgroundColor: '#f5f5f5' }}>
      <Paper id="Temp1" elevation={3} sx={{ p: 3 }}>

        <Grid container spacing={2} sx={{ backgroundColor: '#57975b', color: 'white', p: 2, borderRadius: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">{`${input.First_Name} ${input.Last_Name}`}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              <Grid item xs={12}><CallIcon fontSize="small" /> {input.Mobile}</Grid>
              <Grid item xs={12}><HomeIcon fontSize="small" /> {input.Address}</Grid>
              <Grid item xs={12}><EmailIcon fontSize="small" /> {input.Email}</Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" color="primary">Objective <FlagCircleIcon /></Typography>
          <StyledPaper>
            <Typography>{input.Objective}</Typography>
          </StyledPaper>
        </Box>

        <Box>
          <Typography variant="h5" color="primary">Work Experience <WorkIcon /></Typography>
          {[{
            Job_Title: input.Job_Title,
            Organization: input.Organization,
            Degree: input.Degree,
            Start_Date: input.Start_Date,
            End_Date: input.End_Date,
          }, ...experiences].map((exp, index) => (
            <StyledPaper key={index}>
              <Typography variant="h6">Work Experience {index + 1}</Typography>
              <Typography><strong>Job Title:</strong> {exp.Job_Title}</Typography>
              <Typography><strong>Organization:</strong> {exp.Organization}</Typography>
              {exp.Degree && <Typography><strong>Degree:</strong> {exp.Degree}</Typography>}
              <Typography><strong>Time Duration:</strong> {exp.Start_Date} - {exp.End_Date}</Typography>
            </StyledPaper>
          ))}
        </Box>

        <Box>
          <Typography variant="h5" color="primary">Education <SchoolIcon /></Typography>
          {[{
            Type: input.Type,
            University: input.University,
            Degree: input.Degree,
            Start_year: input.Start_year,
            End_year: input.End_year,
          }, ...Educations].map((edu, index) => (
            <StyledPaper key={index}>
              <Typography variant="h6">Education {index + 1}</Typography>
              <Typography><strong>Type:</strong> {edu.Type}</Typography>
              <Typography><strong>University:</strong> {edu.University}</Typography>
              <Typography><strong>Degree:</strong> {edu.Degree}</Typography>
              <Typography><strong>Time Duration:</strong> {edu.Start_year} - {edu.End_year}</Typography>
            </StyledPaper>
          ))}
        </Box>

        <Box>
          <Typography variant="h5" color="primary">Key Skills <KeyIcon /></Typography>
          <StyledPaper>
            {[input.Skill_1, input.Skill_2, ...KeySkills.map(s => s.Skill)].filter(Boolean).map((skill, i) => (
              <Typography key={i}>• {skill}</Typography>
            ))}
          </StyledPaper>
        </Box>

      </Paper>
    </Box>
  );
}

export default Template3;