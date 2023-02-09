import Tilt from 'react-parallax-tilt'
import { Box } from '@mui/material'

function App() {
  const offset = 1.5
  var pngArray = []

  for (var i = 1; i < 40; i++) {
    var k = i < 10 ? '0' + i : i
    pngArray.push([`img/png3D/${k}.png`, i * offset])
  }

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
        perspective={500}
        transitionSpeed={1500}
        scale={1.1}
      >
        <img src="img/png3D/00.png" alt="3D" />
        {pngArray.map((item) => (
          <>
            <img
              style={{
                position: 'absolute',
                transform: `translateX(-270px) translateZ(${item[1]}px)`
              }}
              src={item[0]}
              alt="3D"
            />
            <img
              style={{
                position: 'absolute',
                transform: `translateX(-270px) translateZ(-${item[1]}px)`
              }}
              src={item[0]}
              alt="3D"
            />
          </>
        ))}
      </Tilt>
    </Box>
  )
}

export default App
