import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const AlertComponent = () => {
    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
        </Alert>
    )
}

export default AlertComponent