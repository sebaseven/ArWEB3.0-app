import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  ListSubheader,
} from "@material-ui/core";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AccessibleForwardIcon from "@material-ui/icons/AccessibleForward";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
export const MenuIzquierda = ({ handleclose }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.list}>
      {/* <Divider /> */}
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Menu
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem component={Link} onClick={handleclose} button to="/">
          <ListItemIcon>
            <AccessibleForwardIcon />
          </ListItemIcon>
          <ListItemText primary="Accesibilidad" />
        </ListItem>
        <ListItem
          onClick={handleclose}
          component={Link}
          button
          to="/reportes"
        >
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItem>

        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <SettingsApplicationsIcon />
          </ListItemIcon>
          <ListItemText primary="Configuracion" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              component={Link}
              button
              to="/"
              className={classes.nested}
              onClick={handleclose}
            >
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText primary="Normas WCAG" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};
