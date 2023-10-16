import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../Images/Logo.png';

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0)',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
  width: '100%',
  color: 'rgba(0, 0, 0, 1)',
  backdropFilter: 'blur(20px)',
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: 'rgba(248, 235, 195, 1)',
    backdropFilter: 'blur(10px)',
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '250px',
    fontWeight:"600",
    color: 'inherit',  textDecoration: 'none',
  },
}));

const NavLink = styled(Link)(({ theme, active }) => ({
  fontWeight:"600",
  color: 'inherit',
  textDecoration: 'none',
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    borderRadius: '20px',
  },
}));

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => { setIsDrawerOpen(!isDrawerOpen); };
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GlassAppBar position="static" elevation={0}>
        <Toolbar>
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <Box display="flex" alignItems="center">
              <img src={Logo} alt="Logo" height="50" style={{ marginRight: '8px' }} />
              <Typography variant="h4"  style={{fontWeight:'800', color:'#1769aa'}}>
                Hennessy Store
              </Typography>
            </Box>
            <Box display={{ xs: 'none', md: 'flex' }}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/product">Product</NavLink>
              <NavLink to="/packing">Packing</NavLink>

              <NavLink to="/contact">Contact</NavLink>
            </Box>
            <Box display={{ xs: 'flex', md: 'none' }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ '&:hover': { backgroundColor: 'transparent' } }}
              >
                {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </GlassAppBar>

      <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
        <ListItem  style={{cursor:"pointer"}} onClick={toggleDrawer}>
            <ListItemText   primary="X" />
          </ListItem>
          <ListItem button component={NavLink} to="/" active={location.pathname === '/'} onClick={toggleDrawer}>
            <ListItemText  primary="Home" />
          </ListItem>
          <ListItem button component={NavLink} to="/product" active={location.pathname === '/product'} onClick={toggleDrawer}>
            <ListItemText primary="Product" />
          </ListItem>
          <ListItem button component={NavLink} to="/packing" active={location.pathname === '/packing'} onClick={toggleDrawer}>
            <ListItemText primary="Packing" />
          </ListItem>
          <ListItem button component={NavLink} to="/contact" active={location.pathname === '/contact'} onClick={toggleDrawer}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </StyledDrawer>
    </Box>
  );
}

export default Header;
