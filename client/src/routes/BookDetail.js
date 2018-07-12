import React, { Fragment } from "react";
import ListItem from "../components/ListItem";
import BookCopies from "../components/BookCopies";
import GenreItem from "../components/GenreItem";
import { withData } from "../components/DataHoc";

const BookDetail = props => {
  const {
    data: [book, ...copies]
  } = props;

  if (!props.data.length) return null;

  return (
    <Fragment>
      <h2 style={{ marginTop: 0 }}>{book.title}</h2>
      <ListItem label="author" text={book.author.name} to={book.author.url} />
      <ListItem label="summary" text={book.summary} />
      <ListItem label="ISBN" text={book.isbn} />
      <p>
        <strong>genre: </strong>
        {book.genre.map(x => <GenreItem key={x.id} {...x} />)}
      </p>
      <BookCopies copies={copies} />
    </Fragment>
  );
};

export default withData(BookDetail);
