import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import image from "assets/img/faces/avatar.jpg";
import mapa from "assets/img/mapa.jpg";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ContentContacto() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="left">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.title}>Ubicación</h4>
          <Button 
            href="https://goo.gl/maps/tWNKWaY18bNMcdwP8"
            target="_blank"
            >
              <img
                  src={mapa}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                  />
          </Button>
          <p className={classes.title}>Av Chapultepec 57, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06040 Ciudad de México, CDMX</p>
          <Button color="twitter">
            <i className={classes.socials + " fab fa-twitter"} /> Síguenos
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> Síguenos
          </Button>
          <Button color="google">
            <i className={classes.socials + " fab fa-google-plus-g"} />
            Síguenos
          </Button>
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
        </GridItem>
 
      </GridContainer>
    </div>
  );
}
