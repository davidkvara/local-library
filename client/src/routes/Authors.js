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
        {this.state.author_list.map(author => (
          <div className="author-list" key={author.id}>
            <p>
              <a href={author.url}>{author.name}</a>{" "}
              <span className="smaller">
                ({author.date_of_birth_formatted}-{
                  author.date_of_death_formatted
                })
              </span>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Author;
