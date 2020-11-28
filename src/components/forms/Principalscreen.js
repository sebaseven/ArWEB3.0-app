import React from "react";

//import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import { Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CopyRight } from "../ui/CopyRight";
import TabPanel from "./TabPanel";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import SwitchesGroup from "../ui/SwitchesGroup";
import RadioNivel from "../ui/RadioNivel";
import RadioVersion from "../ui/RadioVersion";
const useStyles = makeStyles((theme) => {
  return {
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "row",
      justifyContent:"center"
    },
    title: {
      display: "flex",
      flexDirection: "row",
      justifyContent:"center"
    },
    subtitulo:{
        marginTop: 15,
        textAlign:'center'
    },
    content: {
      flexGrow: 1,
      marginTop: 15,
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
        <Container >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography
                style={{ color: "#FAFAFA", textAlign: "center" }}
                variant="h4"
              >
                Evaluacion De Accesibilidad WEB
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <Grid item xs={12}>
              <Paper className={classes.title}>
              <Typography className={classes.subtitulo} variant="h6" component="h2">Configuracion Analisis</Typography>
              </Paper>
            </Grid>
              <Paper className={fixedHeightPaper}>
                <Grid item xs={4}>
                <SwitchesGroup />
                </Grid>
                <Grid item xs={4}>
                <RadioNivel/>
                </Grid>
                <Grid item xs={4}>
                <RadioVersion/>
                </Grid>           
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <TabPanel></TabPanel>
              </Paper>
            </Grid>
            <Grid item xs={2}>
           <Button variant="contained" color="secondary">Verificar</Button>
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
