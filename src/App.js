import Tilt from 'react-parallax-tilt'
import { Box } from '@mui/material'

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Tilt
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)'
        }}
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        perspective={5000}
        transitionSpeed={1500}
        scale={1.1}
      >
        <img style={{ opacity: 0.2 }} src="img/png3D/00.png" alt="3D" />
        <img
          style={{
            opacity: 0.2,
            position: 'absolute',
            transform: 'translateX(-270px)'
          }}
          src="img/png3D/15.png"
          alt="3D"
        />
        <img
          style={{
            opacity: 0.2,
            position: 'absolute',
            transform: 'translateX(-270px) translateZ(100px)'
          }}
          src="img/png3D/30.png"
          alt="3D"
        />
      </Tilt>
    </Box>
  )
}

export default App
