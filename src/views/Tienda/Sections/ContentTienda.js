import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ContentTienda() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="left">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Productos</h2>
          <GridContainer justify="left">
          <GridItem xs={12} sm={6} md={3}>
              <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  />
            <h4 className={classes.title}>Dama</h4>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
              <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  />
            <h4 className={classes.title}>Caballero</h4>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
              <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  />
            <h4 className={classes.title}>Plata</h4>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
              <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  />
            <h4 className={classes.title}>Oro</h4>
          </GridItem>
          </GridContainer>
          <GridContainer justify="left">
          <GridItem xs={12} sm={6} md={3}>
              <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  />
            <h4 className={classes.title}>Amor y compromiso</h4>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
              <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  />
            <h4 className={classes.title}>Acero inoxidable</h4>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
              <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  />
            <h4 className={classes.title}>Chapa de oro</h4>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
              <img
                  src={image}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  />
            <h4 className={classes.title}>Liquidación</h4>
          </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={4} justify="center">
            <h4 className={classes.title}>Publicidad</h4>
            <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
            />
            <h4 className={classes.title}>Publicidad</h4>
            <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
            />
        </GridItem>
 
      </GridContainer>
    </div>
  );
}
