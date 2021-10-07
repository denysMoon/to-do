import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const AlertComponent = ( {alert} ) => {
    console.log(alert)
    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Reload the application
        </Alert>
    )
}

export default AlertComponent