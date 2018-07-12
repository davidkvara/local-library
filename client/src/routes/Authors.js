import React, { Fragment } from "react";
import { withData } from "../components/DataHoc";
import { Link } from "react-router-dom";

const Author = props => {
  const { data: author_list } = props;

  return (
    <Fragment>
      <h2 className="page-title">Author List</h2>
      {author_list.map(author => (
        <p key={author.id}>
          <Link to={author.url}>{author.name}</Link>
          <span className="smaller">
            ({author.date_of_birth_formatted}-{author.date_of_death_formatted})
          </span>
        </p>
      ))}
    </Fragment>
  );
};

export default withData(Author);
