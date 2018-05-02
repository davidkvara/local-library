import React from "react";

export default function BookList(props) {
  return (
    <div>
      {props.books.map(book => (
        <p className="book" key={book.id}>
          <a href={book.url}>{book.title}</a>-
          {book.author.name}
        </p>
      ))}
    </div>
  );
}
