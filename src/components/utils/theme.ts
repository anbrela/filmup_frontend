import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1500,
      xl: 1736,
    },
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#013d59',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#d76c71',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})
