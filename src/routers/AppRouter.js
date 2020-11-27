import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AppNavBar } from "../components/bar/AppNavBar";

export const AppRouter = () => {
    //const dispatch = useDispatch();
    //const dispatch = useDispatch();
    //const auth = useSelector((state) => state.auth);
    // console.log(auth.idUsuario);
  
   
    //const [checkingUser, setCheckingUser] = useState(true);
    return (
      <Router>
        <div>
         
           <AppNavBar /> 
          {/* <Switch>
            <PublicRoute
              path="/auth/login"
              isAuthenticated={!!auth.idUsuario}
              component={LoginScreen}
            />
  
            <PrivateRoute
              exact
              path="/"
              isAuthenticated={!!auth.idUsuario}
              component={HomeScreen}
            />
            <PrivateRoute
              exact
              path="/afiliaciones"
              isAuthenticated={!!auth.idUsuario}
              component={AfiliacionesScreen}
            />
            <Redirect to="/auth/login" />
          </Switch> */}
        </div>
      </Router>
    );
  };
  