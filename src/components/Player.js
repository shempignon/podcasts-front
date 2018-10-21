import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles";

const Player = ({ classes: { playerContainer, player }, src = undefined }) => {
  return (
    <Paper className={ playerContainer }>
      <audio controls src={ src } className={ player }/>
    </Paper>
  )
};

export default withStyles(styles, { withTheme: true })(Player);