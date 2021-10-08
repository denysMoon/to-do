import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ToDoItem from './ToDoItem';
import Spinner from './Spinner';
import AlertComponent from './AlertComponent';
import { useSelector } from 'react-redux'

const ToDoContainer = ({ setValue }) =>{

    const state = useSelector(state=>state.fetch.fetchedPosts)
    const loader = useSelector(state=>state.app.loading)
    const alert = useSelector(state=>state.app.alert)

    const loading = () =>{
        if(loader){
            return <Spinner />
        } else if (alert) {
            return <AlertComponent />
        } else if (state.length === 0) {
            return <AlertComponent message="There is no notes" warning="info" />
        } else {
            return [...state].reverse().map(item=><ToDoItem item={item} state={state} setValue={setValue} key={item._id} />)
        }
    }

    return(      
        <Container maxWidth="md"
          sx={{mt: 2}}  >
            <Box>
                {
                    alert ? (
                        <AlertComponent />
                    ) : (
                        loading()
                    )
                }
            </Box>
        </Container>
    )
}

export default ToDoContainer