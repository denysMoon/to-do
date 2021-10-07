import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const CustomTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        letterSpacing: '2px',
        marginTop: '15px'
      },
  }));

const CustomContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'flex', 
        justifyContent: 'center',
        width: '100%'
      },
  }));

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <CustomContainer maxWidth="md" sx={{height: '60px'}}>
                    {/* <Toolbar> */}
                        <CustomTypography variant="h3"
                         sx={{letterSpacing: "7px", textAlign: "center", fontWeight: '500'}} >
                            The To-Do App
                        </CustomTypography>
                    {/* </Toolbar> */}
                </CustomContainer>
            </AppBar>
        </Box>
    )
}

export default Header