import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Beenhere, Favorite } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function MisionVision() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nosotros</h2>
          <h5 className={classes.description}>
            Con más de 30 años a su servicio tenemos la confianza de ofrecerles un extenso surtido de modelos y líneas con productos de excelencia en Oro 10, 14 y 18 quilates, brillantería, plata, chapa de oro y acero inoxidable.
            Nuestro compromiso es garantizar el mejor producto al mejor precio.
            Estamos seguros que usted encontrará la joya adecuada para su estilo y presupuesto. Esperamos su visita en cualquiera de nuestras tiendas donde con gusto le atenderemos.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Misión"
              description="Comercializar productos de joyería tradicional y contemporánea que satisfagan las necesidades de nuestros clientes brindándoles la mejor calidad y el mejor precio."
              icon={Beenhere}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Visión"
              description="Ser una empresa líder en comercialización de joyería de nuestra región, con productos garantizados que integren los más altos estándares de calidad, diseño e innovación; adquiriendo la preferencia del cliente para impulsar el crecimiento y desarrollo del negocio."
              icon={Beenhere}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Valores"
              description="Para nosotros cada pieza tiene un significado más allá del metal. Significa confianza, trascendencia, prosperidad, aprecio y amor."
              icon={Favorite}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
