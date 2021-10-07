import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { deleteAction } from '../redux/actions'
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';


const CustomGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {

      },
  }));

const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {

      },
  }));


const ToDoItem = ({ item, setValue, state }) => {
    const dispatch = useDispatch()

    const deleteList = () =>{
        dispatch(deleteAction(item._id))
    }

    const editItem = (id) =>{
            const editItem = state.find((item) => item._id === id);
            setValue({...editItem})
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
    }

    return (
        <Card sx={{ mt: 2 }}>
            <CardContent>
                <CustomGrid container
                   alignItems="center" >
                    <Grid item
                        xs={10}
                        sm={10}
                        xs={12}>
                        <Typography variant="h5" component="div">
                            {item.body}
                        </Typography>
                    </Grid>
                    <Grid item
                        xs={2}
                        sm={2}
                        xs={4}>
                        <CustomButtonGroup>
                            <IconButton color="primary" aria-label="upload picture" component="button"
                                onClick={()=>editItem(item._id)} >
                                <EditIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="upload picture" component="button"
                                onClick={deleteList} >
                                <DeleteForeverIcon />
                            </IconButton>
                        </CustomButtonGroup>
                    </Grid>
                </CustomGrid>
            </CardContent>
        </Card>
    )
}

export default ToDoItem