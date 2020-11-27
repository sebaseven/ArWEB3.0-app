import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    perceptibilidad: true,
    operatividad: false,
    comprensibilidad: true,
    robustez:true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Principios a Verificar</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.perceptibilidad} onChange={handleChange} name="perceptibilidad" />}
          label="Perceptibilidad"
        />
        <FormControlLabel
          control={<Switch checked={state.operatividad} onChange={handleChange} name="operatividad" />}
          label="Operatividad"
        />
        <FormControlLabel
          control={<Switch checked={state.comprensibilidad} onChange={handleChange} name="comprensibilidad" />}
          label="Comprensibilidad"
        />
         <FormControlLabel
          control={<Switch checked={state.robustez} onChange={handleChange} name="robustez" />}
          label="Robustez"
        />
      </FormGroup>
    
    </FormControl>
  );
}