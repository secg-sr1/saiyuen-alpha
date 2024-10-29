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
        useMediaQuery,
        Tooltip
    } from '@mui/material';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';



import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

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
  const [ showAccordion, setShowAccordion ] = useState(false);
  const [ hideAccordion, setHideAccordion ] = useState(true)

  const [ chipClickVisualization, setChipClickVisualization ] = useState(true);
  const [ chipClickInstructions, setChipClickInstructions ] = useState(false);

  const handleCheckboxChangeBase = (event) => {
    setShowBase(event.target.checked)
  }

  const handleCheckboxChangeStructure = (event) => {
    setShowStructure(event.target.checked)
    
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const handleChipClickVisualization = () => {
    setChipClickVisualization(true);
    setChipClickInstructions(false);
  }

  const handleChipClickInstructions = () => {
    setChipClickVisualization(false);
    setChipClickInstructions(true);
  }


  const handleClickShowAccordion = () => {
    setShowAccordion(true)
  }

  const handleClickHideAccordion = () => {
    setShowAccordion(false)
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


        <Stack direction="row" spacing={1} sx={{position: 'absolute', bottom:8, right:16, zIndex:999}}>
          <Tooltip title="Bridge Info" placement='left'>
            {!showAccordion && 
            <IconButton sx={{color:'white'}} onClick={handleClickShowAccordion}>
               <AddCircleIcon  fontSize='large'/>
            </IconButton> }
            {showAccordion && 
            <IconButton>
              <RemoveCircleIcon sx={{color:'white'}} fontSize='large' onClick={handleClickHideAccordion}/>
            </IconButton>
            }
          </Tooltip>
        </Stack>


      {
        showAccordion && 

        <Box sx={{position:'absolute', bottom:'9%', right:'2%', width: {
          xs:'96%',
          sm:'40%',
          md:'30%',
          lg:'30%'},
          // height:650, 
          zIndex:9999,
          overflowY: 'auto',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': { width: '5px' },
          '&::-webkit-scrollbar-track': { backgroundColor: 'rgba(0,0,0,0.1)' },
          '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,1)' },
          
          }}>
          
            <Accordion sx={{backgroundColor:'transparent', border:'1px solid rgba(255, 255, 255, 0.2)', color:'#FFFFFF'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:'#FFFFFF'}} />}
                aria-controls="panel1-content"
                id="panel1-header"
                
              >
                <Typography sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:300}}>
                  Saiyuen Bridge Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Card sx={{borderRadius:5, boxShadow:5, backgroundColor:'transparent', border:'1px solid rgba(255, 255, 255, 0.2)'}}>
                  <CardHeader
                    title=""
                    subheader=""
                    sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:300}}
                  />
  
  
                    {
                      chipClickVisualization && 
                        <CardMedia 
                        component="img"
                        src="https://github.com/secg-sr1/saiyuen-alpha/blob/main/public/bridge-02-elements.png?raw=true"
                        sx={{ height: 200 }}
                        />
                    }
  
                    
  
                    {
                      chipClickInstructions && 
                        <CardMedia 
                        component="img"
                        src="https://github.com/secg-sr1/saiyuen-alpha/blob/main/public/bridge-02-00.png?raw=true"
                        sx={{ height: 200 }}
                        />
                    }
  
                      <CardActions disableSpacing>
                        
                        <Stack direction="row">
                            <Chip variant='outlined' label="visualization" onClick={handleChipClickVisualization} sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:400, backgroundColor: chipClickVisualization ? "#5a5a5a" : "#282828", color:'#FFFFFF' }}/>
                            <Chip variant='outlined' label="instructions" onClick={handleChipClickInstructions} sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:400, backgroundColor: chipClickInstructions ? "#5a5a5a" : "#282828", color:'#FFFFFF'}}/>
                        </Stack>
  
                        <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          arial-label="show more"
                        >
                          <ExpandMoreIcon sx={{color:'#FFFFFF'}}/>
                        </ExpandMore>
  
                      </CardActions>
  
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                            <Typography sx={{ fontWeight:200, fontSize:"16px", color:'#FFFFFF'}}>
                            - 象徵著過去與未來的連接。
                            </Typography>
                          </CardContent>
                      </Collapse>
  
                </Card>
  
              </AccordionDetails>
            </Accordion>
  
            <Accordion sx={{backgroundColor:'transparent', border:'1px solid rgba(255, 255, 255, 0.2)', color:'#FFFFFF'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:'#FFFFFF'}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:300}}>
                  Saiyuen Bridge Elements
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel control={<Checkbox defaultChecked sx={{color:'#FFFFFF'}} /> } onChange={handleCheckboxChangeBase} label="Base" sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:300}} />
                <FormControlLabel control={<Checkbox defaultChecked sx={{color:'#FFFFFF'}} />} onChange={handleCheckboxChangeStructure} label="Structure" sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:300}} />
                {/* <Typography>Click the floor of the bridge</Typography> */}
              </AccordionDetails>
            </Accordion>
  
            <Accordion sx={{backgroundColor:'transparent', border:'1px solid rgba(255, 255, 255, 0.2)', color:'#FFFFFF'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:'#FFFFFF'}} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography sx={{fontFamily:'Montserrat, Arial, sans-serif', fontWeight:300}}>
                  Saiyuen Bridge Video
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Card sx={{borderRadius:5, boxShadow:5, backgroundColor:'transparent', border:'1px solid rgba(255, 255, 255, 0.2)'}}>
                  <CardHeader
                    // action={
                    //   <IconButton >
                    //     <MoreVertIcon />
                    //   </IconButton>
                    // }
                    // title="Saiyuen"
                    subheader=""
                  />
                    <CardMedia 
                        component="iframe"
                        src="https://www.youtube.com/embed/4FOmQkFgicQ?si=wVke1zASp0fnVN3K"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        sx={{ height: 220, borderColor:'#000000' }}
                        autoplay
                        
                      
                      />
  
  
                      <CardActions disableSpacing>
                        {/* <IconButton>
                          <FavoriteIcon />
                        </IconButton> */}
  
                        <IconButton aria-label="share">
                            <ShareIcon sx={{color:'#FFFFFF'}} />
                        </IconButton>
  
                        <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          arial-label="show more"
                        >
                          <ExpandMoreIcon sx={{color:'#FFFFFF'}} />
                        </ExpandMore>
  
                      </CardActions>
  
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                          <CardContent>
                            <Typography sx={{ fontWeight:200, fontSize:"16px", color:'#FFFFFF'}}>
                            - 象徵著過去與未來的連接。
                            </Typography>
                          </CardContent>
                      </Collapse>
  
                </Card>
              </AccordionDetails>
            </Accordion>
          </Box>
      }

      
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
