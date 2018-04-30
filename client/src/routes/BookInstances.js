import React from "react";

class BookInstance extends React.Component {
  state = { bookinstance_list: [] };

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("/catalog/bookinstances")
      .then(res => res.json())
      .then(data => this.setState({ bookinstance_list: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Book Instance List</h2>
        {this.state.bookinstance_list.map((bookinstance, i) => {
          const status =
            bookinstance.status === "Available"
              ? "success"
              : bookinstance.status === "Maintenance"
                ? "alarm"
                : "danger";
          return (
            <div className="bookinstance-list" key={i}>
              <p>
                {bookinstance.book.title} -{" "}
                <span className={status}>{bookinstance.status}</span>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookInstance;
