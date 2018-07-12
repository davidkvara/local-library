import React, { Fragment } from "react";
import BookList from "../components/BookList";
import { withData } from "../components/DataHoc";

const Books = props => {
  const { data: books } = props;

  return (
    <Fragment>
      <h2 className="page-title">Book List</h2>
      <BookList books={books} />
    </Fragment>
  );
};

export default withData(Books);
