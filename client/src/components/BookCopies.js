import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

export default function BookCopies({ copies }) {
  return (
    <section style={{ margin: "10px" }}>
      <h3>Copies</h3>
      {copies.length > 0 ? (
        copies.map(copy => (
          <div key={copy.id} className="spec">
            <ListItem label="status" text={copy.status} />
            <ListItem label="imprint" text={copy.imprint} />
            <p>
              <strong>id: </strong>
              <Link to={copy.url}>{copy.id}</Link>
            </p>
          </div>
        ))
      ) : (
        <p>No copies avialable</p>
      )}
    </section>
  );
}
