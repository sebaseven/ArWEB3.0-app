import React from 'react'
import { Typography, Link } from "@material-ui/core";
export const CopyRight = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="http://www.uade.edu.ar/">
          Fundacion UADE
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
    
}
