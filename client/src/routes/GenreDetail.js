import React, { Fragment } from "react";
import { withData } from "../components/DataHoc";
import { Link } from "react-router-dom";

const GenreDetail = props => {
  if (!props.data.length) return null;

  const {
    data: [genre, ...books]
  } = props;

  return (
    <Fragment>
      <h1 className="genre-title">{genre.name}</h1>
      {books.length > 0 ? (
        books.map(detail => (
          <div key={detail.id} className="book">
            <h3 className="book-title">
              <Link to={detail.url}>{detail.title}</Link>
            </h3>
            <p>{detail.summary}</p>
          </div>
        ))
      ) : (
        <p>No books found</p>
      )}
    </Fragment>
  );
};

export default withData(GenreDetail);
