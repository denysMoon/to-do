import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const AlertComponent = ( {alert, message, warning} ) => {
    console.log(alert)
    return (
        <Alert severity= {warning ? warning : "error"} sx={{mt: 2}}>
            <AlertTitle>Error</AlertTitle>
            { message ? message : "Reload the application" }
        </Alert>
    )
}

export default AlertComponent