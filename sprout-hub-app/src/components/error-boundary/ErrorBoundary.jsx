import { Component } from "react";
import ErrorPage from "./ErrorPage";

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
      hasError: true,
      errorMessage: error.message,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
        <ErrorPage errorMessage={this.state.errorMessage} hasError={this.state.hasError}/>
        </>
      );
    }

    return this.props.children;
  }
}
