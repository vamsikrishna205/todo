import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { alpha } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import Ios_Switch from '../Switch/Toggle_Switch'
import HDWY from '../Images/HDWY.png'
import '../searchnav/styles.css'
import maylee from '../Images/maylee.png'
import DashboardRoundIcon from '@material-ui/icons/Dashboard';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: theme.center,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        marginTop: '6px',
    },
    drawerFooter: {
        marginTop: 'auto',
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(5),
        marginLeft: theme.spacing(5),
        width: '100%',
        height: '50',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(0),
            width: '100%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
    },
    inputRoot: {
        color: 'black',
        height: '50px',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.down('lg')]: {
            width: '80ch',
        },
        [theme.breakpoints.down('md')]: {
            width: '50ch',
        },
        [theme.breakpoints.down('sm')]: {
            width: '30ch',
        },
        [theme.breakpoints.down('xs')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    Menu_Wrap: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },

}));

export default function PersistentDrawerLeft1() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="" color="primary" >
                    <Badge badgeContent={10} color="secondary"  >
                        <SettingsIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="primary">
                    <Badge badgeContent="" variant="dot">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen} >
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    marginBottom="0px"
                >
                    <Ios_Switch />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar id="App_Bar2"
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>

                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.Menu_Wrap}>
                    </Typography>
                    <div className={classes.search} >
                        <div className={classes.searchIcon} >
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="black">
                            <Badge badgeContent="" variant="dot">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="" color="black">
                            <Badge color="Primary" id="set_opt" >
                                <SettingsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton id="nav-dot"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="black"
                            marginBottom="0px"
                        >
                            <Ios_Switch />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="black"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <div class="inside_menu">
                        <div class="logo_image">
                            <img src={HDWY} class="menu_image" /></div>
                        <div class="Menu_Name">Menu</div>
                    </div>

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>

                </div>
                <Divider />
                <List component="nav" aria-label="main mailbox folders">
                    <a class="Home_link" href="https://vamsikrishna205.github.io/outlook/">
                        <ListItem button>
                            <ListItemIcon>
                                <MailOutlineIcon />
                                <ListItemText id="msg_dot" />
                            </ListItemIcon>
                            <ListItemText primary="Messages" />
                            <ListItemText primary="3" id="blog_3" />
                        </ListItem>
                    </a>

                    <a class="todo_link" href="https://vamsikrishna205.github.io/todo/" styles={{ textDecoration: "auto" }}>
                        <ListItem button>
                            <ListItemIcon>
                                <PlaylistAddCheckRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Todo" />
                        </ListItem>
                    </a>
                </List>
                <div className={classes.drawerFooter} >
                    <div class="inside_menu">
                        <div class="user_image">
                            <img src={maylee} class="menu_image" /></div>
                        <div class="user_Name">Maylee Bettle</div>
                    </div>

                </div>
                <Divider />

            </Drawer>
        </div>
    );
}
