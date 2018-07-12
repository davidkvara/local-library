import React, { Fragment } from "react";
import ListItem from "../components/ListItem";
import DataProp from "../components/DataProp";

const Home = () => (
  <DataProp query="/catalog">
    {context => {
      const { data: library } = context;

      if (!library) return null;
      return (
        <Fragment>
          <h1 className="hello">Welcome to your Local Library</h1>
          <p className="large lighter">
            The library has the following record counts:
          </p>
          <div style={{ margin: "30px 20px" }}>
            <ListItem label="Books" text={library.book_count} />
            <ListItem label="Copies" text={library.book_instance_count} />
            <ListItem
              label="Copies avialable"
              text={library.book_instance_available_count}
            />
            <ListItem label="Authors" text={library.author_count} />
            <ListItem label="Genres" text={library.genre_count} />
          </div>
        </Fragment>
      );
    }}
  </DataProp>
);

export default Home;
