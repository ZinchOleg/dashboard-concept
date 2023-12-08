import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AppConversionRates from '../dashboard/app-conversion-rates';

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

export default function Orders() {

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
            <AppConversionRates
                  title="Number of purchases"
                  subheader="(+43%) than last year"
                  chart={{
                    series: [
                      { label: 'Italy', value: 400 },
                      { label: 'Japan', value: 430 },
                      { label: 'China', value: 448 },
                      { label: 'Canada', value: 470 },
                      { label: 'France', value: 540 },
                      { label: 'Germany', value: 580 },
                      { label: 'South Korea', value: 690 },
                      { label: 'Netherlands', value: 1100 },
                      { label: 'United States', value: 1200 },
                      { label: 'United Kingdom', value: 1380 },
                    ],
                  }}
                />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
    </ThemeProvider>
  );
}
