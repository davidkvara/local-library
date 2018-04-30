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
        <h2 className="page-title">Books List</h2>
        {this.state.books_list.map((book, i) => (
          <div className="book-list" key={i}>
            <p>
              <a href={book.url}>
                {book.title} -{" "}
                <strong>
                  {book.author.first_name} {book.author.family_name}
                </strong>
              </a>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Books;
