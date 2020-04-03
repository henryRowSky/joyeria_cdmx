import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionCarousel from "./Sections/SectionCarousel.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Inicio  (props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="JoyeriaCDMX"
        rightLinks={<HeaderLinks />}
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />

      <div className={classNames(classes.main)}>
        <SectionCarousel />
      </div>
      <Footer />
    </div>
  );
}
