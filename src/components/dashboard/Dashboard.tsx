import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
// import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Chart from '../chart';
import AppConversionRates from './app-conversion-rates';
import AppCurrentSubject from './app-current-subject';
import AppWebsiteVisits from '../orders/app-website-visits';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                
                
                <Box>
                  <AppWebsiteVisits
                    title="Website Visits"
                    subheader="(+43%) than last year"
                    chart={{
                      labels: [
                        '01/01/2003',
                        '02/01/2003',
                        '03/01/2003',
                        '04/01/2003',
                        '05/01/2003',
                        '06/01/2003',
                        '07/01/2003',
                        '08/01/2003',
                        '09/01/2003',
                        '10/01/2003',
                        '11/01/2003',
                      ],
                      series: [
                        {
                          name: 'Team A',
                          type: 'column',
                          fill: 'solid',
                          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                        },
                        {
                          name: 'Team B',
                          type: 'area',
                          fill: 'gradient',
                          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                        },
                        {
                          name: 'Team C',
                          type: 'line',
                          fill: 'solid',
                          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                        },
                      ],
                    }}
                  />
                </Box>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
    </ThemeProvider>
  );
}
