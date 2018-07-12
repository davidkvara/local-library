import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withData } from "../components/DataHoc";

const BookInstance = props => {
  const { data: bookinstance_list } = props;
  return (
    <Fragment>
      <h2 className="page-title">Book Instance List</h2>
      {bookinstance_list.map(bookinstance => {
        const status =
          bookinstance.status === "Available"
            ? "success"
            : bookinstance.status === "Maintenance"
              ? "alarm"
              : "danger";
        return (
          <p key={bookinstance.id}>
            <Link to={bookinstance.url}>{bookinstance.book.title}</Link> -
            <span> {bookinstance.imprint} </span>
            <span className={status}>{bookinstance.status}</span> - (due:{" "}
            {bookinstance.due_back_formatted})
          </p>
        );
      })}
    </Fragment>
  );
};

export default withData(BookInstance);
