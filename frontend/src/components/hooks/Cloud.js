import React, { Component } from "react";
import TagCloud from "TagCloud";

export default class Cloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        radius: 360,
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
      },
      texts: [
        "HTML",
        "CSS",
        "Javascript",
        "PHP",
        "Symfony",
        "Twig",
        "Three.js",
        "React",
        "Python",
        "Django",
        "3D",
        "Blender",
        "C#",
        "Unity",
        "Rest API",
        "MySQL",
        "GLSL",
        "VSCode",
        "Git",
        "Leaflet.js",
        "Chart.js",
        "npm",
        "webpack",
        "babel",
        "firebase",
      ],
    };
  }

  componentDidMount() {
    const skill = document.getElementById("skill")
    TagCloud( skill,this.state.texts, this.state.options )
  }
  
  render() {
    return <div id="skill"></div>;
  }
}
