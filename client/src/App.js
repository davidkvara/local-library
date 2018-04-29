import React, { Component } from "react";
import LibraryContent from "./components/LibraryContent";

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("/catalog")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <LibraryContent data={data} />
      </div>
    );
  }
}

export default App;
