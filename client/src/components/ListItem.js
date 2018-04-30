import React from "react";

const ListItem = props => {
  if (props.label) {
    return (
      <p>
        <strong>{props.label}</strong>: {props.text}
      </p>
    );
  }
  return <p>{props.children}</p>;
};

export default ListItem;
