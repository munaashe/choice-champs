import { Container, Grid, Typography } from '@mui/material';
import React from 'react'
import background from '../../../assets/background.jpg';
import president from '../../../assets/president.jpg';

const Banner = () => {
  return (
    <div style={{ backgroundColor: '#fafafa' }}>
      <div style={{
        backgroundImage: `url(${background})`
      }}>
        <Container maxWidth='lg' sx={{ minHeight: '450px', paddingBottom: '20px' }}>
          <Grid container sx={{ paddingTop: '100px' }} alignItems='center' justifyContent='center' >
            <Typography variant='h2' sx={{ color: '#fff', fontWeight: 'bold', textAlign: "center" }}>
              A lousy phrase here, on a good-dark background
            </Typography>
            <Typography sx={{ color: '#fff', fontSize: '1.3rem', fontStyle: 'italic', textAlign: "center" }}>
              And a welcoming continuation in italics here
            </Typography>
          </Grid>
        </Container>
      </div>
      <Container maxWidth='lg' sx={{ marginTop: '-50px', marginBottom: '20px', backgroundColor: '#fff', borderRadius: '24px' }}>
        <Grid container spacing={3} sx={{ padding: '20px' }}>
          <Grid item lg={8} md={8} xs={12} sm={12}>
            <Grid container sx={{ paddingTop: '100px' }} alignItems='center' justifyContent='center' >
              <Typography variant='h6' sx={{ color: '#050543', fontWeight: 'bold', textAlign: 'center', padding: '30px' }}>
                "Welcome, you are at the right place. We love you,
                and our goal is for you to make informed decisions
                that will bring you joy today, and in the future"
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={3.5} md={3.5} xs={12} sm={12}>
            <img
              src={president}
              alt='president'
              style={{
                height: '250px',
                borderRadius: '125px'
              }}
            />
            <Typography variant='h6' align='right' sx={{ color: '#050543' }}>
              Silas Mavende
            </Typography>
            <Typography variant='subtitle2' align='right' sx={{ color: '#050543', fontStyle: 'italic' }}>
              President
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <br />
    </div>
  )
}

export default Banner