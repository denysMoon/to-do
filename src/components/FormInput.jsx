import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../redux/actions'

const FormInput = () =>{
    const [value,setValue] = useState("")
    const dispatch = useDispatch()
    const storeEditPost = useSelector(store=>store.editPost.editPost)

    const onChange = e =>{
        const value = e.target.value
        setValue(value)
    }

    const onSubmit = e =>{
        e.preventDefault()

        dispatch(postAction(value))
        setValue("")
    }

    return(
        <Container maxWidth="md"
          sx={{mt: 2}}  >
            <form onSubmit={onSubmit}>
                <Grid container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                >
                    <Grid item
                    xs={11} >
                        <TextField type="form"
                        label="Type"
                        value={value}
                        onChange={onChange}
                        onSubmit={onSubmit}
                        fullWidth={true} />                     
                    </Grid>
                    <Grid item
                    xs={1} >
                        <Button variant="text"
                        onClick={onSubmit} >
                            Do it
                        </Button>  
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default FormInput