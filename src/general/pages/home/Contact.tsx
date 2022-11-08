import { Grid, TextField, Typography, Button, Box, Container, FormControlLabel, Checkbox } from '@mui/material';
import React from 'react'

const Contact = () => {
  return (
    <div style={{ background: '#d3d3d3' }}>
      <Container maxWidth='md' sx={{ paddingtop: '20px', paddingBottom: '20px' }}>
        <Grid container spacing={3} sx={{ justifyContent: 'space-evenly' }} >
          <Grid item xs={12} lg={6} md={6}>
            <form >
              <Typography variant='subtitle1' sx={{ color: '#050543', fontStyle: 'italic', textAlign: 'center' }}>
                Reach Out to Us
              </Typography>
              <Grid container spacing={0.5} style={{ backgroundColor: 'transparent', paddingRight: '50px', paddingLeft: '30px' }}>
                <Grid xs={12} sm={12} item>
                  <TextField
                    placeholder='Name'
                    label='Name'
                    name='name'
                    variant='outlined'
                    fullWidth required
                    inputProps={{
                      style: {
                        color: '#050543',
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        color: '#f36a11',
                      }
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f36a11',
                        borderWidth: '1px'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type='email'
                    placeholder='Enter email'
                    label='Email'
                    name='email'
                    variant='outlined'
                    fullWidth required
                    inputProps={{
                      style: {
                        color: '#050543',
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        color: '#f36a11',
                      }
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f36a11',
                        borderWidth: '1px'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Message'
                    multiline rows={2}
                    placeholder='Type your message here'
                    name='message'
                    variant='outlined'
                    fullWidth required
                    inputProps={{
                      style: {
                        color: '#050543',
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        color: '#f36a11',
                      }
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#f36a11',
                        borderWidth: '1px'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box textAlign='center'>
                    <Button type='submit'
                      variant='contained'
                      style={{
                        backgroundColor: '#f36a11',
                        color: '#e1e1e1',
                        fontSize: '14px',
                        borderRadius: 10,
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <Container>
              <Typography variant='h6' sx={{ color: '#050543', fontWeight: 'bold' }} align='center'>
                Newsletter
              </Typography>
              <Typography variant='subtitle2' sx={{ color: '#050543' }} align='center'>
                Subscribe to our Newsletter and mailing list
              </Typography>
              <TextField
                type='email'
                placeholder='Enter email'
                label='Email'
                name='email'
                variant='outlined'
                fullWidth required
                inputProps={{
                  style: {
                    color: '#050543',
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: '#f36a11',
                  }
                }}
                sx={{
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#f36a11',
                    borderWidth: '1px'
                  },
                  marginTop: '15px'
                }}
              />
              <FormControlLabel control={<Checkbox sx={{ color: '#f36a11', '&.Mui-checked': { color: '#f36a11' } }} />} label='Send me important notices via email' />
              <FormControlLabel control={<Checkbox sx={{ color: '#f36a11', '&.Mui-checked': { color: '#f36a11' } }} />} label='Add me on the always ready volunteers listing' />
              <Box textAlign='center' marginTop='15px'>
                <Button type='submit'
                  variant='contained'
                  style={{
                    backgroundColor: '#f36a11',
                    color: '#e1e1e1',
                    fontSize: '14px',
                    borderRadius: 10,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div >
  )
}

export default Contact