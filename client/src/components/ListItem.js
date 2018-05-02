import React from "react";
import { Link } from "react-router-dom";

const ListItem = props => {
  if (props.label) {
    if (props.to) {
      return (
        <p>
          <strong>{props.label}: </strong>
          <Link to={props.to}>{props.text}</Link>
        </p>
      );
    }
    return (
      <p>
        <strong>{props.label}</strong>: {props.text}
      </p>
    );
  }
  return <p>{props.children}</p>;
};

export default ListItem;
