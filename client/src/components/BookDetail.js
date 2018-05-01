import React from "react";

class BookDetail extends React.Component {
  state = { details: [] };

  componentDidMount() {
    fetch(this.props.match.url)
      .then(res => res.json())
      .then(data => this.setState({ details: data }));
  }

  render() {
    console.log(JSON.stringify(this.state.details, null, 2));

    return (
      <div>
        <h2>hello</h2>
      </div>
    );
  }
}

export default BookDetail;
