import React, { Component, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Vidios from "./components/Vidios/Vidios";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";


import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupIcon from '@material-ui/icons/Group';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
import HeaderMUI from "./components/Header/HeaderMUI";
import HeaderContainer from "./components/Header/HeaderContainer";

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderContainer open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key='Profile' component={Link} to="/profile">
              <ListItemIcon> <AccountBoxIcon />  </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItem>
            <ListItem button key='Messages' component={Link} to="/dialogs">
              <ListItemIcon> <MailIcon />  </ListItemIcon>
              <ListItemText primary='Messages' />
            </ListItem>
            <ListItem button key='Developers' component={Link} to="/developers">
              <ListItemIcon> <GroupIcon />  </ListItemIcon>
              <ListItemText primary='Developers' />
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button key='Music' component={Link} to="/music">
              <ListItemIcon> <MusicVideoIcon />  </ListItemIcon>
              <ListItemText primary='Music' />
            </ListItem>
            <ListItem button key='Vidios' component={Link} to="/vidios">
              <ListItemIcon> <VideoLibraryIcon />  </ListItemIcon>
              <ListItemText primary='Vidios' />
            </ListItem>
            <ListItem button key='Settings' component={Link} to="/settings">
              <ListItemIcon> <SettingsIcon />  </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path="/profile/*" element={<ProfileContainer />}  />
                        <Route path="/" element={<ProfileContainer />}  />
                        </Routes>
                        </Suspense>
                        <Routes>
                        <Route path="/developers" element={<UsersContainer />} />
                        <Route path="/vidios" element={<Vidios />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/login" element={<Login />} />
                        {/* <Route path="/*" element={<div>404 NOT FOUND</div>} /> */}
                        </Routes>
      </main>
    </div>
  );
}
