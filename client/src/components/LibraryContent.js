import React from "react";
import ListItem from "./ListItem";

const LibraryContent = ({ data }) => {
  return (
    <div>
      <p className="large">The library has the following record counts:</p>
      {data.map((library, i) => (
        <div key={i}>
          <ListItem label="Books" text={library.book_count} />
          <ListItem label="Copies" text={library.book_instance_count} />
          <ListItem
            label="Copies avialable"
            text={library.book_instance_available_count}
          />
          <ListItem label="Authors" text={library.author_count} />
          <ListItem label="Genres" text={library.genre_count} />
        </div>
      ))}
    </div>
  );
};

export default LibraryContent;
