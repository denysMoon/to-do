import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { deleteAction, editPostAction } from '../redux/actions'
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';

const ToDoItem = ({ item }) => {
    const storeEditPost = useSelector(store=>store.editPost.editPost)
    const dispatch = useDispatch()

    const deleteList = () =>{
        dispatch(deleteAction(item._id))
    }

    const editList = () =>{
        dispatch(editPostAction(item.body))
    }

    return (
        <Card sx={{ minWidth: 275, mt: 2 }}>
            <CardContent>
                <Grid container>
                    <Grid item
                        xs={10}>
                        <Typography variant="h5" component="div">
                            {item.body}
                        </Typography>
                    </Grid>
                    <Grid item
                        xs={2}>
                        <ButtonGroup>
                            <IconButton color="primary" aria-label="upload picture" component="button"
                                onClick={editList} >
                                <EditIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="upload picture" component="button"
                                onClick={deleteList} >
                                <DeleteForeverIcon />
                            </IconButton>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ToDoItem