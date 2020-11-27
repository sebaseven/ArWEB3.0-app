import React from "react";

//import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CopyRight } from "../ui/CopyRight";
import TabPanel from "./TabPanel";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import SwitchesGroup from "../ui/SwitchesGroup";
const useStyles = makeStyles((theme) => {
  return {
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    subtitulo:{
        marginTop: 15,
        textAlign:'center'
    },
    content: {
      flexGrow: 1,
      marginTop: 25,
    },
    fixedHeight: {
      height: 240,
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      padding: theme.spacing(0, 0, 0),
      marginTop: "50px",
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    footer: {
      padding: theme.spacing(3),
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
    },
  };
});
export const Principalscreen = () => {
  const classes = useStyles();
  const lastPath = localStorage.getItem("lastPath") || "/";
  const history = useHistory();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  if (lastPath !== "/") {
    history.push(lastPath);
  }
  return (
    <>
      <main className={classes.content}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography
                style={{ color: "#FAFAFA", textAlign: "center" }}
                variant="h3"
              >
                Evaluacion De Accesibilidad WEB
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                ></Grid>
                <Typography className={classes.subtitulo} variant="h6">Configuracion Analisis</Typography>
                <SwitchesGroup />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <TabPanel></TabPanel>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}></Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Herramienta Libre de Evaluacion de Accesibilidad de Sitios WEB
        </Typography>
        <CopyRight />
      </footer>
    </>
  );
};
