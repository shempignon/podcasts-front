import React from "react";
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import BroadcastList from "./components/BroadcastList";
import Grid from "@material-ui/core/Grid/Grid";
import CreateFeed from "./components/CreateFeed";
import withStyles from "@material-ui/core/styles/withStyles";
import BottomRightButton from "./components/BottomRightButton";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit,
  },
  main: {
    width: '100%',
    height: '100%',
  }
});

const Router = ({ classes: { root, main } }) => (
  <Grid className={root} container>
    <BrowserRouter>
      <main className={main}>
        <BottomRightButton />

        <Switch>
          <Route exact path="/" component={BroadcastList}/>
          <Route path="/new" component={CreateFeed}/>
        </Switch>
      </main>
    </BrowserRouter>
  </Grid>
);

export default withStyles(styles, { withTheme: true })(Router);