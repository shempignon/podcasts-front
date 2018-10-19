import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = ({ spacing: { unit }, palette: { secondary: { main } } }) => ({
  playerContainer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
    padding: unit,
    height: unit * 8,
    backgroundColor: main,
  },
  player: {
    backgroundColor: "transparent",
  }
});

const Player = ({ classes: { playerContainer, player }, src = undefined }) => {
  return (
    <Paper className={playerContainer}>
      <audio controls src={src} className={player}/>
    </Paper>
  )
};

export default withStyles(styles, { withTheme: true })(Player);