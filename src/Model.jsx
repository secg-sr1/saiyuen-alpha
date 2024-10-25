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
        Box
    } from '@mui/material';


import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';

// import RowRadioButtonsGroup from './RowRadioButtonsGroup.jsx';

const actions = [
  // { icon: <FileCopyIcon />, name: 'Copy' },
  // { icon: <SaveIcon />, name: 'Save'},
  // { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share'},

]


export default function Model() {
  return (
    <>
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


      <div style={{position:'absolute', top:'2%', left:'2%', width:'30%', zIndex:9999}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Hey hey hello friend
          </AccordionDetails>
        </Accordion>
      </div>


        


      
        

        




      




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
    </>
  );
}
