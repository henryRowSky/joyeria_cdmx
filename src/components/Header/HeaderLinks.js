/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Home, Group, ShoppingCart, HelpOutline, Room } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
       <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_parent"
          className={classes.navLink}
        >
          <Home className={classes.icons} /> Inicio
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/quienessomos"
          color="transparent"
          target="_parent"
          className={classes.navLink}
        >
          <Group className={classes.icons} /> ¿Quiénes somos?
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href="/tienda"
          color="transparent"
          target="_parent"
          className={classes.navLink}
        >
          <ShoppingCart className={classes.icons} /> Tienda
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href="/faq"
          color="transparent"
          target="_parent"
          className={classes.navLink}
        >
          <HelpOutline className={classes.icons} /> Preguntas frecuentes
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href="/contacto"
          color="transparent"
          target="_parent"
          className={classes.navLink}
        >
          <Room className={classes.icons} /> Contacto
        </Button>
      </ListItem>
    </List>
  );
}
