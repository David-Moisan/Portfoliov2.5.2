import React, { Component } from "react";
import Loading from "./Loading";
import Navbar from "../components/Navbar";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 5000);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="page-inner">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
