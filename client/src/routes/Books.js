import React from "react";

class Books extends React.Component {
  state = { books_list: [] };

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("/catalog/books")
      .then(res => res.json())
      .then(data => this.setState({ books_list: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Book List</h2>
        {this.state.books_list.map(book => (
          <div className="book-list" key={book.id}>
            <p>
              <a href={book.url}>{book.title}</a>-
              {book.author.name}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Books;
