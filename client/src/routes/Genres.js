import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withData } from "../components/DataHoc";

const Genre = props => {
  const { data: genre_list } = props;
  if (!genre_list) return null;
  return (
    <Fragment>
      <h2 className="page-title">Genre List</h2>
      <ul className="genre-list">
        {genre_list.map(genre => (
          <li key={genre.id}>
            <Link to={genre.url} className="genre">
              {genre.name}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default withData(Genre);
