import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Slide, Snackbar } from "@material-ui/core";
import { finishAlerta } from "../../actions/ui/alertas";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
 
}));
export const Alertas = () => {
  const classes = useStyles();
  //const [transition, setTransition] = useState(undefined);
  const { open, tipo='success', mensaje, titulo } = useSelector((state) => state.alert);

  const dispatch = useDispatch();
  //const [tipoAlerta, setTipoAlerta] = useState('success');



  const TransitionDown = (props) => {
    return <Slide {...props} direction="down" />;
  }
  return (
    <div className={classes.root}>

      {
        <Snackbar
          TransitionComponent={TransitionDown}
          //key={transition ? transition.name : ''}
          //style={{ height: "100%" }}
          // anchorOrigin={{
          //   vertical: "center",
          //   horizontal: "center",
          // }}
          message={mensaje}
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            dispatch(finishAlerta());
          }}
        >

            <Alert variant="filled" severity={tipo}>
              <AlertTitle>{titulo}</AlertTitle>
              {mensaje}
            </Alert>
          
          
        </Snackbar>
      }
    </div>
  );
};
