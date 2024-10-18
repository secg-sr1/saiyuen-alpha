
import  { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Card, CardHeader, CardMedia, CardActions, Collapse, CardContent, Typography, Box, Avatar, IconButton } from '@mui/material';


import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



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




export default function Scene() {
  const cameraRef = useRef();
  const videoRef = useRef();
  const [ showCard, setShowCard ] = useState(false);
  const [expanded, setExpanded ] = useState(false);

  const gltf = useLoader(GLTFLoader, 'https://cdn.glitch.global/d2f9544e-96dc-44d9-b842-b7b9535cbc18/bridge-01.glb?v=1728745934063');


  useEffect(() => {
    // Access the user's webcam and set it as the background
    navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'environment' }}})
      .then((stream) => {
        const videoElement = document.getElementById('videoBackground');
        if (videoElement) {
          videoElement.srcObject = stream;
          videoElement.play();
        }
      })
      .catch((err) => {
        console.error('Error accessing webcam: ', err);
      });
  }, []);


  const handleSphereClick = () => {
    setShowCard(!showCard);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }


  return (
    <>
      <PerspectiveCamera ref={cameraRef} />
      <OrbitControls makeDefault />

      <directionalLight position={[1, 1, 1]} intensity={1.5} />
      <ambientLight intensity={0.1} />

      <primitive object={gltf.scene} scale={[0.2, 0.2, 0.2]} />


      <mesh position={[0, 0.5, -1]} onPointerDown={handleSphereClick}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="red" />


        { showCard && 
        
        <Html 
          center
        >
           
          <Box
            sx={{
              position: 'absolute',
              top: '80%',
              left:'30%',
              zIndex: 9999, 
              backgroundColor: 'white',
              padding: 1,
              borderRadius: 2
            }}
          >
            <Card sx={{maxWidth: 345}}>
                {/* <CardContent>
                  <Typography>遊客站在橋上可以欣賞壯麗的風景</Typography>
                </CardContent> */}
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Saiyen"
                  subheader="Bridge"
                />
                  <CardMedia 
                    component="img"
                    height="110"
                    image="/bridge-01-upgrade.png"
                    alt="Bridge"
                  />
                  <CardContent>
                    {/* <Typography sx={{fontWeight:200, fontSize:"16px"}}>
                        Hello Friend
                    </Typography> */}
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton>
                      <FavoriteIcon />
                    </IconButton>

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
          </Box>
        
        </Html>
        }
              
      </mesh>



      


    </>
  );
}
