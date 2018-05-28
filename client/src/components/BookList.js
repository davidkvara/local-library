import React from "react";
import { Link } from "react-router-dom";

export default function BookList(props) {
  return (
    <div>
      {props.books.map(book => (
        <p className="book" key={book.id}>
          <Link to={book.url}>{book.title}</Link>-
          {book.author.name}
        </p>
      ))}
    </div>
  );
}
