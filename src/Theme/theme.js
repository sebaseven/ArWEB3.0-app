import { createMuiTheme } from "@material-ui/core/styles";
import colorBack from "../assets/back1.jpg";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import purple from "@material-ui/core/colors/purple";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
  disabledButton: {
    backgroundColor: lightGreen || 'red'
  },
  
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: `url(${colorBack})`,
          padding: 10
          //"url(https://designshack.net/wp-content/uploads/gradient-background.jpg)"
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: 4,
      }, 
    }, 
  },
});
// const theme = createMuiTheme({
//     palette: {
//       primary: {
//         light: purple[300],
//         main: purple[500],
//         dark: purple[700]
//       },
//       secondary: {
//         light: lightGreen[300],
//         main: lightGreen[500],
//         dark: lightGreen[700]
//       }
//     }, typography: {
//       useNextVariants: true
//     },
//   });

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#63a4ff",
//       main: "#1976e2",
//       dark: "#004ba0",
//       getContrastText: "#ecfad8",
//     },
//   },
// });

export default theme;
