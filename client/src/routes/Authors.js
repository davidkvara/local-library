import React from "react";

class Author extends React.Component {
  state = { author_list: [] };

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("/catalog/authors")
      .then(res => res.json())
      .then(data => this.setState({ author_list: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2 className="page-title">Author List</h2>
        {this.state.author_list.map((author, i) => (
          <div className="author-list" key={i}>
            <p>
              {author.first_name} {author.family_name}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Author;
