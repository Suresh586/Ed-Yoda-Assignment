import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import classes from './appbar.module.css'

const pages = ['Courses', 'Programs'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'whitesmoke', width: "1920px" }}>
      {/* <Container maxWidth="xl"> */}
        <Toolbar disableGutters sx={{px:"7%"}}>
          {/* <img src='../EDYODA.pjpg'></img> */}
          <Typography
            variant="h6"
            className={classes.stle}
            noWrap
            component="a"
            width="300px"
            marginLeft="20px"
            href="/"
            sx={{
              // mr: 2,
              display: { xs: 'none', md: 'flex' },
                fontFamily: 'Raleway',
                fontStyle:"normal",
              fontWeight: 800,
              fontSize: 30,
              color: "#0048FF",
              textDecoration: 'none',
            }}
          >
            EDYODA
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
              
            >
              <MenuIcon />
            </IconButton> */}
          {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                color:"black",
                backgroundColor:"black"
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} color='primary'>
                  <Typography textAlign="center">
                    {page}
                    </Typography>
                    <ExpandMoreIcon/>
                </MenuItem>
              ))}
            </Menu> */}
          {/* </Box> */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Typography marginRight={2}
                // key={page}
                color="black"
                onClick={handleCloseNavMenu}
                sx={{ display: 'block', }}
              >
                Courses
              </Typography>
              <ExpandMoreIcon sx={{ color: "black" }} />
              <Typography marginLeft={8} marginRight={2}
                // key={page}
                color="black"
                onClick={handleCloseNavMenu}
                sx={{ display: 'block', }}
              >
                Programs
              </Typography>
              <ExpandMoreIcon sx={{ color: "black" }} />
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Grid container flexDirection="row-reverse">
            <Grid item marginBottom="2px">
              <Button variant="contained" sx={{ borderRadius: 7, width: "166px", marginLeft: 8, height: "40px", background: `linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%)` }}>
                <Typography>
              Join now

                </Typography>
              </Button>
            </Grid>
            <Grid item marginTop={0.6}>
              <Typography marginLeft={8} marginRight={2}
                color="black"
              >
                Login
              </Typography>
            </Grid>
            <Grid item  marginTop={0.8} >
              <SearchIcon sx={{ color: "black" }}/>
            </Grid>
          </Grid>
        </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}
export default ResponsiveAppBar;