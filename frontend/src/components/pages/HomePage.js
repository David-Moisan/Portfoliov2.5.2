import React, { Component } from "react";
import HomePresentation from "../components/home/HomePresentation";
/* import Animation from "../components/home/Animation"; */
import Project from "../components/Project";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default class HomePage extends Component {
  render() {
    return (
      <div className="full-page">
        <HomePresentation />
        {/* <Animation /> */}
        <Project />
        <About />
        <Blog />
        <Contact />
      </div>
    );
  }
}
