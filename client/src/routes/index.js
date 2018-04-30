import React, { Component } from "react";
import LibraryContent from "../components/LibraryContent";

class Home extends Component {
  state = { data: [], loading: true };

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("/catalog")
      .then(res => res.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1 className="hello">Welcome to your Local Library</h1>
        <LibraryContent data={data} />
        {this.state.loading && <p>Loading ...</p>}
      </div>
    );
  }
}

export default Home;
