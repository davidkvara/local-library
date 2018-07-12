import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withData } from "../components/DataHoc";

const AuthorDetail = props => {
  // უკეთესი მეთოდი უნდა მოვიფიქრო...
  if (!props.data.length) return null;

  const {
    data: [author, ...books]
  } = props;

  return (
    <Fragment>
      <h2 style={{ marginTop: 0 }}>{author.name}</h2>
      <p className="lighter smaller">
        {author.date_of_birth_formatted} - {author.date_of_death_formatted}
      </p>
      <h3>Books</h3>
      {books.length > 0 ? (
        books.map(book => (
          <article key={book.id}>
            <h3>
              <Link to={book.url}>{book.title}</Link>
            </h3>
            <p>{book.summary}</p>
          </article>
        ))
      ) : (
        <p>No books found</p>
      )}
    </Fragment>
  );
};

export default withData(AuthorDetail);
