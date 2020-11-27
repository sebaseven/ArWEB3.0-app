import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";
import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PermMediaOutlinedIcon from "@material-ui/icons/PermMediaOutlined";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className={"animate__animated animate__fadeInLeft"}
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5
  },
  tab:{
    borderRadius: 5
  }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  const handleChange = (e, tabselec) => {
    setTab(tabselec);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tab} color="default">
        <Tabs
          value={tab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable"
        >
          <Tab
            label="Pagina Web"
            icon={<ContactsOutlinedIcon />}
            {...a11yProps(0)}
          />

          <Tab
            label="Lote de Paginas WEB"
            icon={<PeopleAltOutlinedIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label="Archivo"
            icon={<DescriptionOutlinedIcon />}
            {...a11yProps(2)}
          />
          <Tab
            label="Codigo HTML"
            icon={<PermMediaOutlinedIcon />}
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
       PAGINA WEB
      </TabPanel>
      <TabPanel value={tab} index={1}>
       LOTE
      </TabPanel>
      <TabPanel value={tab} index={2}>
        ARCHIVO
      </TabPanel>
      <TabPanel value={tab} index={3}>
        CODIGO
      </TabPanel>
    </div>
  );
}
