import React, { Fragment } from "react";
import ListItem from "../components/ListItem";
import { withData } from "../components/DataHoc";

const BookInstanceDetail = props => {
  const { data: details } = props;

  return (
    <Fragment>
      {details.map(detail => (
        <Fragment key={detail.id}>
          <h2>{detail.book.title}</h2>
          <ListItem label="id" text={detail.id} />
          <ListItem label="imprint" text={detail.imprint} />
          <ListItem label="status" text={detail.status} />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default withData(BookInstanceDetail);
