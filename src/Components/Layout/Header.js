import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Box, Toolbar, IconButton, Typography, Avatar, Button, SwipeableDrawer, Divider, List, ListItem, ListItemText, ListItemIcon, Fade, Menu, MenuItem } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@mui/icons-material/Info';
import Login from '@mui/icons-material/Login';
import KeyIcon from '@mui/icons-material/Key';
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Header = () => {
  const useStyles = makeStyles(theme =>({
    headerMenuItem: {
      my: 1,
      color: theme.palette.common.white,
      display: 'block'
    },

    appbar: {
      background: theme.palette.primary.main
    }
  }));

  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openAccountMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const openLanguage = Boolean(languageAnchorEl);

  const handleLanguageChange = (language) => {
    i18n.init({
      lng: language
    });

    setLanguageAnchorEl(false);
  };

  return (
    <div>
      <AppBar
        className={classes.appbar}
        position='sticky'
        elevation={0}>
        <Container >
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ mr: 10, display: { xs: 'none', md: 'flex' } }}>
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => { setOpen(true) }}
                color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                className={classes.headerMenuItem}
                key='Home'>
                {t('home')}
              </Button>

              <Button
                className={classes.headerMenuItem}
                key='Contact'>
                {t('contact')}
              </Button>

              <Button
                className={classes.headerMenuItem}
                key='About'>
                {t('settings')}
              </Button>

              <Button
                className={classes.headerMenuItem}
                aria-controls={openLanguage ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openLanguage ? 'true' : undefined}
                onClick={(event) => { setLanguageAnchorEl(event.currentTarget) }}>
                {t('en')}
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={openAccountMenu ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openAccountMenu ? 'true' : undefined}>
                <Avatar />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <SwipeableDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor="left"
        open={open}
        onClose={() => { setOpen(false) }}
        onOpen={() => { setOpen(true) }}>
        <DrawerHeader>
          <IconButton onClick={() => { setOpen(false) }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button key='Home'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={t('Home')} />
          </ListItem>

          <ListItem button key='Contact'>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={t('contact')} />
          </ListItem>

          <ListItem button key='About'>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={t('settings')}/>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openAccountMenu}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>

        <MenuItem>
          <ListItemIcon>
            <Login fontSize="small" />
          </ListItemIcon>
          {t('login')}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <KeyIcon fontSize="small" />
          </ListItemIcon>
          {t('sign-up')}
        </MenuItem>
      </Menu>

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={languageAnchorEl}
        open={openLanguage}
        onClose={() => { setLanguageAnchorEl(null) }}
        TransitionComponent={Fade} >
        <MenuItem onClick={() => { handleLanguageChange('en') }}>EN</MenuItem>
        <MenuItem onClick={() => { handleLanguageChange('de') }}>DE</MenuItem>
        <MenuItem onClick={() => { handleLanguageChange('fr') }}>FR</MenuItem>
      </Menu>
    </div>
  );
};
export default Header;
