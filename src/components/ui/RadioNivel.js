import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import { Radio, FormControlLabel, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const RedRadio = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: red[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const useStyles = makeStyles((theme) => {
    return {
      paper: {
        padding: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        direction:"column",
        justify:"center",
        alignItems:"center"
      },
    };
  });
export default function RadioNivel() {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const classes = useStyles();
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div >
      <Typography variant="h6">Nivel de Accesibilidad</Typography>
      <FormControlLabel
        value="top"
        control={
          <RedRadio
            checked={selectedValue === "a"}
            onChange={handleChange}
            value="a"
            name="radio-button-demo"
            inputProps={{ "aria-label": "A" }}
          />
        }
        label="A"
        labelPlacement="top"
      />
      <FormControlLabel
        value="top"
        control={
          <Radio
            checked={selectedValue === "aa"}
            onChange={handleChange}
            value="aa"
            name="radio-button-demo"
            inputProps={{ "aria-label": "AA" }}
          />
        }
        label="AA"
        labelPlacement="top"
      />
      <FormControlLabel
        value="top"
        control={
          <GreenRadio
            checked={selectedValue === "aaa"}
            onChange={handleChange}
            value="aaa"
            name="radio-button-demo"
            inputProps={{ "aria-label": "AAA" }}
          />
        }
        label="AAA"
        labelPlacement="top"
      />
    </div>
  );
}
