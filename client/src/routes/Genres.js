import React from "react";
import { Link } from "react-router-dom";

class Genre extends React.Component {
  state = { genre_list: [] };

  componentDidMount() {
    fetch("/catalog/genres")
      .then(res => res.json())
      .then(data => this.setState({ genre_list: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Genre List</h2>
        <ul className="genre-list">
          {this.state.genre_list.map(genre => (
            <li key={genre.id}>
              <Link to={genre.url} className="genre">
                {genre.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Genre;
