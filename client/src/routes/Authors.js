import React from "react";
import { Link } from "react-router-dom";

class Author extends React.Component {
  state = { author_list: [] };

  componentDidMount() {
    fetch("/catalog/authors")
      .then(res => res.json())
      .then(data => this.setState({ author_list: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Author List</h2>
        {this.state.author_list.map(author => (
          <p key={author.id}>
            <Link to={author.url}>{author.name}</Link>
            <span className="smaller">
              ({author.date_of_birth_formatted}-{author.date_of_death_formatted})
            </span>
          </p>
        ))}
      </div>
    );
  }
}

export default Author;
