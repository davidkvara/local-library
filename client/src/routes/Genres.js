import React from "react";

class Genre extends React.Component {
  state = { genre_list: [] };

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("/catalog/genres")
      .then(res => res.json())
      .then(data => this.setState({ genre_list: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Genre List</h2>
        {this.state.genre_list.map((genre, i) => (
          <div className="genre-list" key={i}>
            <p>{genre.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Genre;
