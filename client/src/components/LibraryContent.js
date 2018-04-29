import React from "react";

const LibraryContent = ({ data }) => {
  return (
    <div>
      <h2>The library has the following record counts:</h2>
      {data.map((library, i) => (
        <div key={i}>
          <p>Books: {library.book_count}</p>
          <p>Copies: {library.book_instance_count}</p>
          <p>Copies avialable: {library.book_instance_available_count}</p>
          <p>Authors: {library.author_count}</p>
          <p>Genres: {library.genre_count}</p>
        </div>
      ))}
    </div>
  );
};

export default LibraryContent;
