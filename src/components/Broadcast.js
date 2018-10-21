import React from "react";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import { Link } from "react-router-dom";

export default ({ node: { id, name, cover: { download, url } } }) => {
  const src = null !== download && null !== download.path ? download.path : url;

  return (
    <ListItem button component={ Link } to={ `${id}/episodes` }>
      <Avatar alt={ name } src={ src }/>
      <ListItemText primary={ name }/>
    </ListItem>
  )
};