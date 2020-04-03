import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/faces/avatar.jpg";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ContentFAQ() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="left">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>¿Quién es JoyeríaCDMX?</h2>
          <h5 className={classes.description}>
          JoyeríaCDMX es una empresa que comercializa y fabrica Joyería fina en oro, plata, chapa de oro y acero inoxidable. Tenemos más de 35 años de experiencia en el mercado siempre hemos estado a la vanguardia en diseño, ofreciendo la mejor calidad en las piezas que le vendemos a nuestros clientes. 
          </h5>
 
          <h2 className={classes.title}>¿Por qué comprar con ustedes?</h2>
          <h5 className={classes.description}>
          La calidad, precio y garantía de nuestros productos nos han posicionado en el mercado dando la confianza a nuestros clientes. Contamos con un extenso surtido con el que estamos seguros que encontrará la pieza perfecta para usted o regalar a su ser querido. El servicio que le damos a nuestros clientes es muy importante para nosotros como grupo y empresa. 
          </h5>
  
          <h2 className={classes.title}>¿Dónde puedo encontrarlos?</h2>
          <h5 className={classes.description}>
          Tenemos sucursales en Aguascalientes y Jalisco.  Haz clic por más información de nuestros horarios y mapas a las sucursales. 
          </h5>
 
          <h2 className={classes.title}>¿Dónde puedo ver todos sus productos?</h2>
          <h5 className={classes.description}>
          En nuestro sitio puede encontrar algunos de nuestros productos y páginas de Facebook, sin embargo le invitamos a que visite personalmente nuestras tiendas en San Juan de los Lagos, Jalisco y Aguascalientes, Ags.
          </h5>
 
          <h2 className={classes.title}>¿Tienen precios especiales para mayoristas?</h2>
          <h5 className={classes.description}>
          Sí, contamos con precios especiales para nuestros clientes mayoristas. Para obtener precios de mayoreo es necesario hacer una compra inicial de $7,900 MXN o más. Para más información favor de contactarnos y con gusto atenderemos sus dudas. 
          </h5>
 
          <h2 className={classes.title}>¿Tienen servicio de apartado?</h2>
          <h5 className={classes.description}>
          Sí, tenemos servicio de apartado con un 50% de anticipo del valor total de la pieza que usted desea apartar. 
          </h5>
 
          <h2 className={classes.title}>¿Está disponible la venta en línea en éste sitio?</h2>
          <h5 className={classes.description}>
          Sí, ahora ofrecemos ventas en línea y envíos internacionales. Gracias por su preferencia con JoyeríaCDMX. 
          </h5>
 
          <h2 className={classes.title}>¿Cómo hago pedido de productos en JoyeríaCDMX?</h2>
          <h5 className={classes.description}>
          Puede comprar cualquier producto en la página web con Visa, Mastercard, American Express, o paga con PayPal. 
          </h5>
 
          <h2 className={classes.title}>¿Tienen servicios de reparación en joyería?</h2>
          <h5 className={classes.description}>
          Si, tenemos servicio de reparaciones en nuestras joyerías. Se valuara la pieza dependiendo del trabajo a realizar para que quede como nueva.
          </h5>
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
