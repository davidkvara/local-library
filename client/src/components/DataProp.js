import React from "react";

class DataProps extends React.Component {
  state = { loading: false, data: null };

  componentDidMount() {
    this.setState({ loading: true }, () =>
      fetch(this.props.query)
        .then(response => response.json())
        .then(data =>
          this.setState({
            loading: false,
            data
          })
        )
    );
  }

  render() {
    return this.props.children(this.state);
  }
}

export default DataProps;
