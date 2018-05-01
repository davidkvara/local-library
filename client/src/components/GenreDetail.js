import React from "react";
import { Link } from "react-router-dom";

class GenreDetail extends React.Component {
  state = { details: [], loading: true };

  componentDidMount() {
    fetch(this.props.match.url)
      .then(res => res.json())
      .then(data => this.setState({ details: data, loading: false }));
  }

  render() {
    const { details, loading } = this.state;

    const genreTitle = details.filter(detail => detail.name).map(detail => (
      <h1 className="genre-title" key={detail.id}>
        {detail.name}
      </h1>
    ));
    let onlyBooks = details.slice(0, details.length - 1);

    return (
      <div>
        {genreTitle}
        {loading ? (
          <p>Loading ...</p>
        ) : onlyBooks.length > 0 ? (
          onlyBooks.map(detail => (
            <div key={detail.id} className="book">
              <h3 className="book-title">
                <Link to={detail.url}>{detail.title}</Link>
              </h3>
              <span>{detail.author}</span>
              <p>{detail.summary}</p>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    );
  }
}

export default GenreDetail;
