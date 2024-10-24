import { Canvas } from '@react-three/fiber';
import Scene from './Scene.jsx';
import { Card, CardHeader, CardMedia, CardActions, Collapse, CardContent, Typography, Box, Avatar, IconButton, Stack, Chip, FormGroup, FormControlLabel, Checkbox, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';


import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';



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


      
        <SpeedDial
          ariaLabel='SpeedDial basic example'
          sx={{ position: 'absolute', bottom:16, right:16, zIndex: 9999}}
          icon={<SpeedDialIcon />}

        >
          { actions.map((action) => (
            <SpeedDialAction 
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))

          }
        </SpeedDial>
      




      




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
