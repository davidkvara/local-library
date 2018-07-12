import React, { Component, Fragment } from "react";

export const withData = (ComposedComponent, url) => {
  return class WithData extends Component {
    state = {
      data: [],
      loading: false
    };

    componentDidMount() {
      this.setState({ loading: true });
      fetch(url || this.props.match.url)
        .then(response => response.json())
        .then(data =>
          this.setState({
            loading: false,
            data
          })
        )
        .catch(error => {
          // https://robwise.github.io/blog/cancel-whatwg-fetch-requests-in-react
          if (error.name === "AbortError") return; // expected, this is the abort, so just return
          throw error; // must be some other error, handle however you normally would
        });
    }

    componentWillUnmount = () => {
      this.abortController.abort();
    };

    abortController = new window.AbortController();

    render() {
      return (
        <Fragment>
          {this.state.loading ? (
            <div>fetching...</div>
          ) : (
            <ComposedComponent {...this.state} {...this.props} />
          )}
        </Fragment>
      );
    }
  };
};
