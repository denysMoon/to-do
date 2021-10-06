import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography variant="h4">
                            The To-Do App
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header