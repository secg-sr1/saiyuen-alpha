import  { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene.jsx';
import { Card, 
        CardHeader, 
        CardMedia, 
        CardActions, 
        Collapse, 
        CardContent, 
        Typography, 
        Avatar, 
        IconButton, 
        Stack, 
        Chip, 
        FormGroup, 
        FormControlLabel, 
        Checkbox, 
        SpeedDial, 
        SpeedDialAction, 
        SpeedDialIcon, 
        FormControl, 
        FormLabel, 
        RadioGroup, 
        Radio, 
        Accordion, 
        AccordionActions, 
        AccordionSummary, 
        AccordionDetails,
        Button,
        Box,
        useMediaQuery
    } from '@mui/material';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';



import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';

// import RowRadioButtonsGroup from './RowRadioButtonsGroup.jsx';

import SpeedDialWithAccordion from './SpeedDialWithAccordion.jsx';

import RowRadioButtonsGroup from './RowRadioButtonsGroup.jsx';

import { useStore } from './store/useStore.jsx';

import '@fontsource/montserrat/200.css'; // Weight 400
import '@fontsource/montserrat/300.css'; // Weight 400
import '@fontsource/montserrat/400.css'; // Weight 400
import '@fontsource/montserrat/500.css'; // Weight 500
import '@fontsource/montserrat/700.css'; // Weight 700

const actions = [
  // { icon: <FileCopyIcon />, name: 'Copy' },
  // { icon: <SaveIcon />, name: 'Save'},
  // { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share'},

]


const ExpandMore = styled((props) => {
  const { expand, ...other } = props; 
  return <IconButton {...other} />
})(({theme}) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),

  variants: [
    {
      props: ({ expand }) => !expand, 
      style: {
        transform: 'rotate(0deg)'
      },
    },
    {
      props: ({ expand }) => !!expand, 
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],

}))


export default function Model() {

  const setShowBase = useStore(state => state.setShowBase)
  const setShowStructure = useStore(state => state.setShowStructure)
  const [expanded, setExpanded ] = useState(false);

  const handleCheckboxChangeBase = (event) => {
    setShowBase(event.target.checked)
  }

  const handleCheckboxChangeStructure = (event) => {
    setShowStructure(event.target.checked)
    
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }



  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 834,
        md: 1080,
        lg: 1920,
        xl: 2060,
      },
    },
  });


  return (

    <ThemeProvider theme={theme}>
    <CssBaseline />
      {/* Video background element */}
      <video
        id="videoBackground"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
        autoPlay
        playsInline
      />


      <Box sx={{position:'absolute', bottom:'2%', right:'2%', width: {
        xs:'96%',
        sm:'40%',
        md:'30%',
        lg:'30%'
        
      }, zIndex:9999}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:300}}>
              Bridge Interaction Instructions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <FormControlLabel control={<Checkbox defaultChecked /> } onChange={handleCheckboxChangeBase} label="Base" />
            <FormControlLabel control={<Checkbox defaultChecked />} onChange={handleCheckboxChangeStructure} label="Structure" /> */}
            {/* <Typography>Click the floor of the bridge</Typography> */}

            <Card>
              <CardHeader
                action={
                  <IconButton >
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Saiyuen"
                subheader="Bridge"
              />
                <CardMedia 
                    
                    src="/bridge-01-elements.png"
                    sx={{ height: 200 }}
                    
                  
                  />


                  <CardActions disableSpacing>
                    {/* <IconButton>
                      <FavoriteIcon />
                    </IconButton> */}

                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      arial-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>

                  </CardActions>

                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography sx={{ fontWeight:200, fontSize:"16px"}}>
                         - 象徵著過去與未來的連接。
                        </Typography>
                      </CardContent>
                  </Collapse>

            </Card>


          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:300}}>
              Hello Friend
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel control={<Checkbox defaultChecked /> } onChange={handleCheckboxChangeBase} label="Base" />
            <FormControlLabel control={<Checkbox defaultChecked />} onChange={handleCheckboxChangeStructure} label="Structure" />
            {/* <Typography>Click the floor of the bridge</Typography> */}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:300}}>
              Saiyuen Walkthrough Video
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card>
              <CardHeader
                action={
                  <IconButton >
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Saiyuen"
                subheader="Bridge"
              />
                <CardMedia 
                    component="iframe"
                    src="https://www.youtube.com/embed/4FOmQkFgicQ?si=wVke1zASp0fnVN3K"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sx={{ height: 200 }}
                    autoplay
                  
                  />


                  <CardActions disableSpacing>
                    {/* <IconButton>
                      <FavoriteIcon />
                    </IconButton> */}

                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>

                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      arial-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>

                  </CardActions>

                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography sx={{ fontWeight:200, fontSize:"16px"}}>
                         - 象徵著過去與未來的連接。
                        </Typography>
                      </CardContent>
                  </Collapse>

            </Card>
          </AccordionDetails>
        </Accordion>

      </Box>

      {/* < SpeedDialWithAccordion/> */}


      {/* Canvas for 3D rendering */}
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
        }}
        style={{ position: 'relative' }}
      >
        <Scene />
      </Canvas>
    </ThemeProvider>
  );
}
