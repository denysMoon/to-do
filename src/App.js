import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/actions'
import Header from './components/Header';
import ToDoContainer from './components/ToDoContainer';
import { useEffect } from 'react';
import FormInput from './components/FormInput';

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchData())
  }, [dispatch])

  return (
    <>
      <CssBaseline />
      <Header />
      <FormInput />
      <ToDoContainer />
    </>
  );
}

export default App;
