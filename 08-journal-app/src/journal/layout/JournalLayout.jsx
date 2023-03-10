import { Box } from '@mui/system'
import React from 'react'
import { NavBar, SideBar } from '../components';
import { Toolbar } from '@mui/material';

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>
        {/* Navbar */}
        <NavBar drawerWidth={drawerWidth}/>

        {/* Sidebar */}
        <SideBar drawerWidth={drawerWidth}/>

        <Box component='main'
            sx={{ flexGrow: 1, p: 3}}
        >

            <Toolbar/>
            { children }
        </Box>

    </Box>
  )
}
