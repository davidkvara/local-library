import React from "react";
import { Link } from "react-router-dom";

class AuthorDetail extends React.Component {
  state = { details: [], loading: true };

  componentDidMount() {
    fetch(this.props.match.url)
      .then(res => res.json())
      .then(data => this.setState({ details: data, loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const [author, ...books] = this.state.details;

    if (this.state.loading) return <p>Loading ...</p>;
    return (
      <div>
        <h2>{author.name}</h2>
        <p className="lighter smaller">
          {author.date_of_birth_formatted} - {author.date_of_death_formatted}
        </p>
        <h3>Books</h3>
        {books.length > 0 ? (
          books.map(book => (
            <article key={book.id}>
              <h3>
                <Link to={book.url}>{book.title}</Link>
              </h3>
              <p>{book.summary}</p>
            </article>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    );
  }
}

export default AuthorDetail;
