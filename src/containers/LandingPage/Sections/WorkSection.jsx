import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description}>KONTAK</h5>
            <h2 className={classes.title}>Hubungi Kami</h2>
          </GridItem>
        </GridContainer>
        <div>
          <Button color="primary">Pesan Sekarang</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
