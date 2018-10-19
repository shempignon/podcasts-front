import React from "react";
import { Link, withRouter } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import ReorderIcon from '@material-ui/icons/Reorder';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button/Button";
import { compose } from "react-apollo";

const styles = ({ spacing: { unit }}) => ({
  fab: {
    position: "fixed",
    bottom: unit * 10,
    right: unit * 2,
    zIndex: 1000,
  },
});

const config = pathname => {
  switch (pathname) {
    case "/":
      return {
        icon: <AddIcon/>,
        color: "primary",
        label: "New Feed",
        path: "/new"
      };
    case "/new":
    default:
      return {
        icon: <ReorderIcon/>,
        color: "primary",
        label: "New Feed",
        path: "/"
      };
  }
};

const BottomRightButton = ({ classes: { fab }, location: { pathname } }) => {
  const { icon, color, label, path } = config(pathname);

  return (
    <Button variant="fab" color={color} aria-label={label} className={fab} to={path} component={Link}>
      {icon}
    </Button>
  );
};

export default compose(
  withRouter,
  withStyles(styles, { withTheme: true })
)(BottomRightButton);