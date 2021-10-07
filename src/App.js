import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/actions'
import Header from './components/Header';
import ToDoContainer from './components/ToDoContainer';
import { useEffect } from 'react';
import FormInput from './components/FormInput';
import { useState } from 'react'
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#26a69a'
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 770,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          border: '1px solid #26a69a',
        },
      },
    }
  },
});

// const CustomContainer = styled(Container)(({ theme }) => ({
//   background: '#26a69a',
//   width: '100%',
//   height: '100%'
// }));

function App() {
  const [value,setValue] = useState({
    body: ""
  })
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchData())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <FormInput value={value} setValue={setValue} />
        <ToDoContainer setValue={setValue} />
    </ThemeProvider>
  );
}

export default App;
