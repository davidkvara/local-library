import React from "react";
import Aux from "../components/Fragment";
import ListItem from "../components/ListItem";

class BookInstanceDetail extends React.Component {
  state = { details: [], loading: true };

  componentDidMount() {
    fetch(this.props.match.url)
      .then(res => res.json())
      .then(data => this.setState({ details: data, loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.loading) return <p>Loading ...</p>;
    return (
      <div>
        {this.state.details.map(detail => (
          <Aux key={detail.id}>
            <h2>{detail.book.title}</h2>
            <ListItem label="id" text={detail.id} />
            <ListItem label="imprint" text={detail.imprint} />
            <ListItem label="status" text={detail.status} />
          </Aux>
        ))}
      </div>
    );
  }
}

export default BookInstanceDetail;
