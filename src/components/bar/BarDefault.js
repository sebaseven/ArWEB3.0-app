import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Button,
  Avatar,
  Drawer
} from "@material-ui/core";
import LogoEmpresa from '../../logo.svg';
import {MenuDerecha} from './menuDerecha';
import { withRouter } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
//import { startLogout } from "../../actions/auth";
import { MenuIzquierda } from "./menuIzquierda";
const useStyles = makeStyles((theme) => ({
  seccionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  seccionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  avatarSize: {
    width: 40,
    height: 40,
  },
  list: {
    width: 250,
  },
  listItemText: {
    fontSize: "14px",
    fontWeight: 600,
    paddingLeft: "15px",
    color: "#212121",
  },
}));

const BarSesionDefault = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //const auth = useSelector( state => state.auth );

  const [abrirMenuIzquierda, setAbrirMenuIzquierda] = useState(false);
  const [abrirMenuDerecha, setAbrirMenuDerecha] = useState(false);

  const cerrarMenuDerecha = () => {
    setAbrirMenuDerecha(false);
  };
  const abrirMenuIzquierdaAction = () => {
    setAbrirMenuIzquierda(true);
  };
  const cerrarMenuIzquierda = () => {
    setAbrirMenuIzquierda(false);
  };

  const abrirMenuDerechaAction = () => {
    setAbrirMenuDerecha(true);
  }

  return (
    <React.Fragment>
       <Drawer
        open={abrirMenuIzquierda}
        onClose={cerrarMenuIzquierda}
        anchor="left"
      >
        <div
          className={classes.list}
          onKeyDown={cerrarMenuIzquierda}
        
        >
          <MenuIzquierda handleclose={cerrarMenuIzquierda} classes={classes} />
        </div>
      </Drawer>
      <Drawer
        open={abrirMenuDerecha}
        onClose={cerrarMenuDerecha}
        anchor="right"
      >
        <div
          className={classes.list}
          onClick={cerrarMenuDerecha}
          onKeyDown={cerrarMenuDerecha}
        >
          <MenuDerecha 
            classes={classes} 
         
            usuario = { null}
            />
        </div>
      </Drawer>

      <Toolbar>
      <IconButton color="inherit" onClick={abrirMenuIzquierdaAction}>
          <i className="material-icons">menu</i>
        </IconButton>


        <Typography variant="h6">ArWEB 3.0</Typography>
        <div className={classes.grow}></div>

        <div className={classes.seccionDesktop}>
    
          <Button color="inherit">
            { "Arweb"}
          </Button>
         
          <Avatar src={LogoEmpresa}></Avatar>
        </div>

        <div className={classes.seccionMobile}>
          <IconButton color="inherit" onClick={abrirMenuDerechaAction}>
            <i className="material-icons">more_vert</i>
          </IconButton>
        </div>
      </Toolbar>
    </React.Fragment>
  );
};

export default withRouter(BarSesionDefault);
