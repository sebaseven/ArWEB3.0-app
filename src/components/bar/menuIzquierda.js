import React,{useState} from "react";
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
import DomainIcon from "@material-ui/icons/Domain";
import PeopleIcon from "@material-ui/icons/People";
import CreditCardIcon from '@material-ui/icons/CreditCard';
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
export const MenuIzquierda = ({ cerrarMenuIzquierda }) => {
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
            Beneficiarios
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem
          component={Link}
          onClick={cerrarMenuIzquierda}
          button
          to="/Afiliaciones"
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Afiliaciones" />
        </ListItem>
        <ListItem component={Link} button to="/empresas">
          <ListItemIcon>
            <DomainIcon />
          </ListItemIcon>
          <ListItemText primary="Empresas" />
        </ListItem>
        <ListItem component={Link} button to="/credenciales">
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary="Credenciales" />
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
              to="/seccionales"
              className={classes.nested}
            >
              <ListItemIcon>
                <LocationCityIcon />
              </ListItemIcon>
              <ListItemText primary="Seccionales" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};
