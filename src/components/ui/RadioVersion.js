import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Radio, FormControlLabel, Typography } from "@material-ui/core";
import {  purple, deepOrange } from "@material-ui/core/colors";

const OrangeRadio = withStyles({
    root: {
      color: deepOrange[400],
      "&$checked": {
        color: deepOrange[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const PurpleRadio = withStyles({
    root: {
      color: purple[400],
      "&$checked": {
        color: purple[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  
export default function RadioVersion() {
  const [selectedValue, setSelectedValue] = React.useState("2.0");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6">Version WCAG</Typography>
      <FormControlLabel
        value="top"
        control={
          <PurpleRadio
            checked={selectedValue === "2.0"}
            onChange={handleChange}
            value="2.0"
            name="radio-button-demo"
            inputProps={{ "aria-label": "2.0" }}
          />
        }
        label="2.0"
        labelPlacement="top"
      />
      <FormControlLabel
        value="top"
        control={
          <OrangeRadio
            checked={selectedValue === "2.1"}
            onChange={handleChange}
            value="2.1"
            name="radio-button-demo"
            inputProps={{ "aria-label": "2.1" }}
          />
        }
        label="2.1"
        labelPlacement="top"
      />
     
    </div>
  );
}
