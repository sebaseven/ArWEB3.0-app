import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AppNavBar } from "../components/bar/AppNavBar";
import { Reportes } from "../components/Reportes/Reportes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    //const dispatch = useDispatch();
    //const dispatch = useDispatch();
    //const auth = useSelector((state) => state.auth);
    //console.log(auth.idUsuario);
    //const [checkingUser, setCheckingUser] = useState(true);
    return (
      <Router>
        <div>
         
           <AppNavBar /> 
          <Switch>
            <PublicRoute
              path="/reportes"
              isAuthenticated={false}
              component={Reportes}
            />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  };
  