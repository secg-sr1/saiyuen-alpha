
import  { styled } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Card, 
        CardHeader, 
        CardMedia, 
        CardActions, 
        Collapse, 
        CardContent, 
        Typography, 
        Box, 
        Avatar, 
        IconButton, 
        Accordion, 
        AccordionActions, 
        AccordionSummary, 
        AccordionDetails,
        Button  
    } from '@mui/material';


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

  const gltf = useLoader(GLTFLoader, 'https://cdn.glitch.global/610da9c5-d3d9-48be-83b9-3836bdc195cb/bidge-01-base.glb?v=1729731166335');
  const gltfBridge = useLoader(GLTFLoader, 'https://cdn.glitch.global/610da9c5-d3d9-48be-83b9-3836bdc195cb/bidge-01-structure.glb?v=1729731146544');




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


  const handleBridgeClick = () => {
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
      <ambientLight intensity={0.5} />

      <primitive object={gltf.scene} scale={[0.2, 0.2, 0.2]} onPointerDown={handleBridgeClick} />
      <primitive object={gltfBridge.scene} scale={[0.2, 0.2, 0.2]} />


      {/* <mesh position={[0, 0.5, -1]} onPointerDown={handleSphereClick}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="red" /> */}


        { showCard && 
        
        <Html 
          // center
          position={[0,1,0]}
        >
           
          <Box
            sx={{
              position: 'absolute',
              top: '80%',
              left:'30%',
              zIndex: 9999, 
              backgroundColor: 'white',
              padding: 1,
              borderRadius: 3,
              opacity:0.9
            }}
          >
            <Card sx={{width: 350, boxShadow:3}}>
                {/* <CardContent>
                  <Typography>遊客站在橋上可以欣賞壯麗的風景</Typography>
                </CardContent> */}
                <CardHeader
                  // avatar={
                  //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  //     R
                  //   </Avatar>
                  // }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Saiyen"
                  subheader="Bridge"
                />
                  {/* <CardMedia 
                    component="img"
                    height="110"
                    image="https://github.com/secg-sr1/saiyuen-alpha/blob/main/public/bridge-01-00.png?raw=true"
                    alt="Bridge"
                  /> */}
                  <CardMedia 
                    component="iframe"
                    src="https://www.youtube.com/embed/4FOmQkFgicQ?si=wVke1zASp0fnVN3K"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sx={{ height: 200 }}
                    autoplay
                  
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
              
      {/* </mesh> */}



      



      


    </>
  );
}
