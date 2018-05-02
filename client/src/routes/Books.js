import React from "react";
import BookList from "../components/BookList";

class Books extends React.Component {
  state = { books: [] };

  componentDidMount() {
    fetch("/catalog/books")
      .then(res => res.json())
      .then(books => this.setState({ books }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Book List</h2>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;
