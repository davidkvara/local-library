import React from "react";
import ListItem from "../components/ListItem";
import BookCopies from "../components/BookCopies";
import GenreItem from "../components/GenreItem";

class BookDetail extends React.Component {
  state = { details: [], loading: true };

  componentDidMount() {
    fetch(this.props.match.url)
      .then(res => res.json())
      .then(data => this.setState({ details: data, loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const [book, ...copies] = this.state.details;

    if (this.state.loading) return <p>Loading...</p>;
    return (
      <div>
        <h2 style={{ marginTop: 0 }}>{book.title}</h2>
        <ListItem label="author" text={book.author.name} to={book.author.url} />
        <ListItem label="summary" text={book.summary} />
        <ListItem label="ISBN" text={book.isbn} />
        <p>
          <strong>genre: </strong>
          {book.genre.map(x => <GenreItem key={x.id} {...x} />)}
        </p>
        <BookCopies copies={copies} />
      </div>
    );
  }
}

export default BookDetail;
