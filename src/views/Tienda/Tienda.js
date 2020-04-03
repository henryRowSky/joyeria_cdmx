import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ContentTienda from "./Sections/ContentTienda";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function FAQ(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="dark"
        routes={dashboardRoutes}
        brand="JoyeriaCDMX"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ContentTienda/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
