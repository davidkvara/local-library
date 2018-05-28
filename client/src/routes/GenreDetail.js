import React from "react";
import { Link } from "react-router-dom";

class GenreDetail extends React.Component {
  state = { details: [], loading: true };

  componentDidMount() {
    fetch(this.props.match.url)
      .then(res => res.json())
      .then(data => this.setState({ details: data, loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const [genre = {}, ...books] = this.state.details;

    return (
      <div>
        {this.state.loading ? (
          <p>Loading ...</p>
        ) : (
          <React.Fragment>
            <h1 className="genre-title">{genre.name}</h1>
            {books.length > 0 ? (
              books.map(detail => (
                <div key={detail.id} className="book">
                  <h3 className="book-title">
                    <Link to={detail.url}>{detail.title}</Link>
                  </h3>
                  <p>{detail.summary}</p>
                </div>
              ))
            ) : (
              <p>No books found</p>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default GenreDetail;
