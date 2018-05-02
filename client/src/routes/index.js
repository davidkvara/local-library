import React, { Component } from "react";
import ListItem from "../components/ListItem";
import Aux from "../components/Fragment";

class Home extends Component {
  state = { library: {}, loading: true };

  componentDidMount() {
    fetch("/catalog")
      .then(res => res.json())
      .then(library => this.setState({ library, loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const { library } = this.state;

    return (
      <div>
        <h1 className="hello">Welcome to your Local Library</h1>
        {this.state.loading ? (
          <p>Loading ...</p>
        ) : (
          <Aux>
            <p className="large lighter">
              The library has the following record counts:
            </p>
            <div style={{ margin: "30px 20px" }}>
              <ListItem label="Books" text={library.book_count} />
              <ListItem label="Copies" text={library.book_instance_count} />
              <ListItem
                label="Copies avialable"
                text={library.book_instance_available_count}
              />
              <ListItem label="Authors" text={library.author_count} />
              <ListItem label="Genres" text={library.genre_count} />
            </div>
          </Aux>
        )}
      </div>
    );
  }
}

export default Home;
