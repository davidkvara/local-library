import React from "react";
import { Link } from "react-router-dom";

export default function GenreItem({ url, name }) {
  return <Link to={url}>{name} </Link>;
}
