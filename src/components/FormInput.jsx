import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { postAction, editPostAction, showFillFormAlert, hideFillFormAlert } from '../redux/actions'
import { styled } from '@mui/material/styles';

const FormInput = ({ value, setValue }) =>{
    const fillForm = useSelector(state=>state.app.form)
    const dispatch = useDispatch()

    const onChange = e =>{
        dispatch(hideFillFormAlert())
        setValue({...value, body: e.target.value})
    }

    const onSubmit = e =>{
        e.preventDefault()

        if(!value.body.trim()){
            dispatch(showFillFormAlert())
            return
        }

        if(value._id){
            dispatch(editPostAction(value._id, value.body))
        } else {
           dispatch(postAction(value.body)) 
        }
        setValue({body: ''})
    }

    const CustomContainer = styled(Container)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            
          },
      }));

    return(
        <CustomContainer maxWidth="md"
          sx={{mt: 2}}  >
            <form onSubmit={onSubmit}>
                <Grid container
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                >
                    <Grid item
                    xs={12}>
                        <TextField type="form"
                        label={fillForm ? "You should type something" : "Type"}
                        value={value.body}
                        onChange={onChange}
                        onSubmit={onSubmit}
                        fullWidth={true} />                     
                    </Grid>
                </Grid>
            </form>
        </CustomContainer>
    )
}

export default FormInput