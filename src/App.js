import { Box, Container, Typography } from '@mui/material'
import Tilt3D from './components/Tilt3D'

export default function App() {
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{
          mt: 5,
          textAlign: 'center'
        }}
      >
        Passe o Mouse
      </Typography>
      <Box
        sx={{
          mt: 5,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Tilt3D />
        <Tilt3D />
        <Tilt3D />
      </Box>
    </Container>
  )
}
