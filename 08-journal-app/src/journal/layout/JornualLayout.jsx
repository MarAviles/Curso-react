import { Box } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

export const JornualLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>

        {/* Navbar */}
        <NavBar drawerWidth={ drawerWidth }/>

        {/* Sidebar */}
        <SideBar drawerWidth={ drawerWidth }/>

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3}}
        >

        {/* Toolbar */}

        { children }

        </Box>
    </Box>
  )
}