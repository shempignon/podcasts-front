import React from "react";
import { Link, withRouter } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import ReorderIcon from '@material-ui/icons/Reorder';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button/Button";
import { compose } from "react-apollo";

const styles = theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

const config = pathname => {
  switch (pathname) {
    case "/":
      return {
        icon: <AddIcon />,
        color: "primary",
        label: "New Feed",
        path: "/new"
      };
    case "/new":
    default:
      return {
        icon: <ReorderIcon />,
        color: "primary",
        label: "New Feed",
        path: "/"
      };
  }
};

const BottomRightButton = ({ classes: { fab }, location: { pathname } }) => {
  const {icon , color, label, path} = config(pathname);

  return (
    <Link to={path}>
      <Button variant="fab" color={color} aria-label={label} className={fab}>
        {icon}
      </Button>
    </Link>
  );
};

export default compose(
  withRouter,
  withStyles(styles, { withTheme: true })
)(BottomRightButton);