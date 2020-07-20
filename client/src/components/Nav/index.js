import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SigninIcon from "@material-ui/icons/AccountCircleOutlined";
import LoginIcon from "@material-ui/icons/AccountCircle";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/API";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  navbar: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "none",
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      display: "none",
    },
    position: "inherit",
    backgroundColor: "rgb(250, 246, 236)",
    color: "rgba(0, 0, 0, 0.54)",
  },
  appBarDesktop: {
    backgroundColor: "rgb(250, 246, 236)",
    fontFamily: "Cute Font, cursive",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    width: 150,
  },
  icons: {
    padding: theme.spacing(3, 3, 0, 0),
    minWidth: "50px !important",
    float: "right",
  },
  avatar: {
    padding: theme.spacing(2, 3, 0, 0),
    minWidth: "50px !important",
    float: "right",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [userState, setUserState] = useContext(UserContext);

  const [value, setValue] = React.useState(0);

  function logout() {
    API.logout().then((res) => {
      setUserState({
        ...userState,
        name: "",
        email: "",
        id: "",
        authenticated: false,
      });
    });
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItemLink href="/">
          <ListItemText primary="Recipes" />
        </ListItemLink>
        <ListItemLink href="/shopping">
          <ListItemText primary="Shopping List" />
        </ListItemLink>
        <ListItemLink href="/favorites">
          <ListItemText primary="Favorites" />
        </ListItemLink>
        <ListItemLink href="/signup">
          <ListItemText primary="Sign up" />
        </ListItemLink>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div className={classes.navbar}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Dine In At Home
            </Typography>
          </Toolbar>
        </AppBar>

        <AppBar
          className={classes.appBarDesktop}
          position="static"
          color="default"
        >
          <Grid container>
            <Grid item xs={9}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
              >
                <Toolbar component={Link} to="/">
                  <img src={logo} alt="logo" className={classes.logo} />
                </Toolbar>
                <Tab component={Link} label="Recipes" to="/" />
                <Tab component={Link} label="Shopping List" to="/shopping" />
                <Tab label="Contact Me" />
              </Tabs>
            </Grid>
            <Grid item xs={3}>
              <Tooltip title="Favorites">
                <Tab
                  component={Link}
                  icon={<FavoriteIcon />}
                  className={classes.icons}
                  aria-label="favorite"
                  to="/favorites"
                />
              </Tooltip>

              {userState.name && userState.authenticated ? (
                <>
                  <Tooltip title="Log out">
                    <Tab
                      component={Link}
                      to="/"
                      label={
                        <Avatar
                          alt="Remy Sharp"
                          src=""
                          className={classes.orange}
                        >
                          {userState.name.charAt(0).toUpperCase()}
                        </Avatar>
                      }
                      value="/messages"
                      className={classes.avatar}
                      onClick={logout}
                    />
                  </Tooltip>
                </>
              ) : (
                <>
                  <Tooltip title="Sign up">
                    <Tab
                      component={Link}
                      icon={<SigninIcon />}
                      className={classes.icons}
                      aria-label="sign up"
                      to="/signup"
                    />
                  </Tooltip>
                  <Tooltip title="Login">
                    <Tab
                      component={Link}
                      icon={<LoginIcon />}
                      className={classes.icons}
                      aria-label="login"
                      to="/login"
                    />
                  </Tooltip>
                </>
              )}
            </Grid>
          </Grid>
        </AppBar>
      </div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
