import { Box, Container, Grid, Typography } from '@mui/material'
import Tilt3D from './components/Tilt3D'

export default function App() {
  const boxComp = {
    sx: {
      display: 'flex',
      justifyContent: 'center'
    }
  }

  return (
    <Container maxWidth="md">
      <Typography
        variant="h5"
        sx={{
          mt: { sm: 10, xs: 5 },
          mb: 5,
          textAlign: 'center',
          fontWeight: 900
        }}
      >
        PASSE O MOUSE OU CLIQUE NA TELA
      </Typography>
      <Grid
        container
        spacing={{ sm: 2, xs: 4 }}
        justify="flex-end"
        alignItems="center"
      >
        <Grid item sm={4} xs={12}>
          <Box {...boxComp}>
            <Tilt3D base="letter" numb={40} offset={1.2} />
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Box {...boxComp}>
            <Tilt3D base="astro" numb={41} offset={1} />
          </Box>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Box {...boxComp}>
            <Tilt3D base="hamb" numb={52} offset={1.5} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
