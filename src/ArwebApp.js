import React from "react";
import { Provider } from "react-redux";
//import Dashboard from './maqueta/maqueta';
import { AppRouter } from "./routers/AppRouter";

import { store } from "./store/store";
import theme from "./Theme/theme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Alertas } from "./components/ui/Alertas";

export const ArwebApp = () => {
    return (
        <Provider store={store}>
             <MuiThemeProvider theme={theme}>
             <CssBaseline />
             <Alertas/>
            {/* <PruebaCarrousel/> */}
            <AppRouter /> 
             {/* <Dashboard/>  */}
             </MuiThemeProvider>
      
        </Provider>
      );
}
