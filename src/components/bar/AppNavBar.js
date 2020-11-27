import React from "react";
import { AppBar } from "@material-ui/core";
//import { useSelector } from "react-redux";
import BarSesionDefault from "./BarDefault";
//import { useLocation } from "react-router-dom";

export const AppNavBar = () => {
  //const dispatch = useDispatch();
  //   const auth = useSelector((state) => state.auth);
  //   const location = useLocation();
  // console.log(location.pathname);
  return (
    <div>
      <AppBar position="static">
        <BarSesionDefault />
      </AppBar>
    </div>
  );
};
