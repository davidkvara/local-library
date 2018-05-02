import React from "react";
import { Link } from "react-router-dom";

class BookInstance extends React.Component {
  state = { bookinstance_list: [] };

  componentDidMount() {
    fetch("/catalog/bookinstances")
      .then(res => res.json())
      .then(data => this.setState({ bookinstance_list: data }))
      .catch(err => console.log(err));
  }

  render() {
    // console.log(JSON.stringify(this.state.bookinstance_list, null, 2));

    return (
      <div>
        <h2 className="page-title">Book Instance List</h2>
        {this.state.bookinstance_list.map(bookinstance => {
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
      </div>
    );
  }
}

export default BookInstance;
