import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error) {
    console.log("error occured: " + error);
    return {
        hasError:true,
        errorMessage:error.message
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Error Page</h1>
          <p>{this.state.errorMessage}</p>
        </>
      );
    }

    return this.props.children;
  }
}
