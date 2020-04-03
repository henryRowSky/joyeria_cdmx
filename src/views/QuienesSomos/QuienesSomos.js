import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import MisionVision from "./Sections/MisionVision";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function QuienesSomos(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="JoyeriaCDMX"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/joyas.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>¿Quiénes somos?</h1>
              <h4>
              Desde 1982 JoyeríaCDMX ha brindado la comercialización y fabricación de Joyería fina, su finalidad fue y ha sido darle a usted y sus seres queridos piezas especiales de Joyería que permanecerán entre ustedes por generaciones, conmemorando los eventos más especiales en su vida.
              Fueron piezas fabricadas a mano en un principio, después se fueron adaptando a la tecnología y vanguardia ofreciendo la mejor calidad en cada pieza que le entregamos.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <MisionVision/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
