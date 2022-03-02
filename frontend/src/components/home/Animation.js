import React from 'react'
import * as THREE from "three"
import { DoubleSide } from 'three'

import vertex from "/static/shaders/vertex.glsl";
import fragment from "/static/shaders/fragment.glsl";
import blue from "/static/source/blue.png";

//init var
let scene, camera, renderer, controller, domEl;

//resize var
let imageAspect, a1, a2;

//size var
let width, height, aspect;

//mouse var
let mouse = new THREE.Vector2(0, 0);
let prevMouse = new THREE.Vector2(0, 0);
let currentWave = 0;

//geometry var
let geometry, material, mesh, colorRandoms;
let meshes = [];
let max = 50;

//declare var
let time = 0;
let isPlaying = true;

function init() {
    //Setup scene
    scene = new THREE.Scene();
  
    //Setup size of screen
    width = window.innerWidth;
    height = window.innerHeight;
    aspect = width / height;
  
    //Setup camera
    camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      1000
    );
    camera.position.set(0, 0, 4);
    scene.add(camera);
  
    //Setup a renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x221a1a, 1);
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    domEl = document.getElementById("container").appendChild( renderer.domElement )
  
    //callback function
    setupResize();
    resize();
    mouseEvents();
    addObject();
    render();
  }
  
  function setupResize() {
    //Add an event for the resize of screen
    window.addEventListener("resize", resize);
  }
  
  function resize() {
    //Setup image aspect
    imageAspect = 853 / 1280;
    if (height / width > imageAspect) {
      a1 = (width / height) * imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = (height / width) * imageAspect;
    }
  
    camera.updateProjectionMatrix();
  }
  
  function mouseEvents() {
    window.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX - width / 2;
      mouse.y = height / 2 - event.clientY;
    });
  }
  
  function addObject() {
    //Setup shader material
    material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: DoubleSide,
      uniforms: {
        time: { value: 0 },
        uDisplacement: { value: null },
        uTexture: { value: new THREE.TextureLoader().load(blue) },
        resolution: { value: new THREE.Vector4() },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });
  
    material.uniforms.resolution.value.x = width;
    material.uniforms.resolution.value.y = height;
    material.uniforms.resolution.value.z = a1;
    material.uniforms.resolution.value.w = a2;
  
    //Setup geometry
    geometry = new THREE.PlaneBufferGeometry(64, 64, 1, 1);
  
    for (let i = 0; i < max; i++) {
      let m = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(blue),
        //color: 0x5aa9bf,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthTest: true,
        depthWrite: true,
      });
  
      //Setup a mesh
      mesh = new THREE.Mesh(geometry, m);
      //mesh.visible = false;
      //mesh.rotation.z = 2 * Math.PI * Math.random();
      scene.add(mesh);
      meshes.push(mesh);
    }
  }
  
  function stop() {
    isPlaying = false;
  }
  
  function play() {
    if (!isPlaying) {
      render();
      isPlaying = true;
    }
  }
  
  function setNewWave(x, y, index) {
    let mesh = meshes[index];
    mesh.visible = true;
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.scale.x = mesh.scale.y = 0.1;
    mesh.material.opacity = 0.5;
  }
  
  function trackMousePosition() {
    if (
      Math.abs(mouse.x - prevMouse.x) < 4 &&
      Math.abs(mouse.y - prevMouse.y) < 4
    ) {
      //nothing
    } else {
      setNewWave(mouse.x, mouse.y, currentWave);
      currentWave = (currentWave + 1) % max;
    }
  }
  
  function render() {
    trackMousePosition();
    //Iteration of time for animation
    if (!isPlaying) return;
    time += 0.05;
  
    //render of scene
    renderer.render(scene, camera);
    //Synchronize a render to the animation
    requestAnimationFrame(render);
    
    meshes.forEach((mesh) => {
      if (mesh.visible) {
        mesh.rotation.z += 0.002;
        mesh.material.opacity *= 0.96;
  
        if (mesh.material.opacity < 0.002) {
          mesh.visible = false;
        }
  
        mesh.scale.x = 0.955 * mesh.scale.x + 0.168;
        mesh.scale.y = mesh.scale.x;
      }
    });
  }
  
  init();

/**
 * HomeAnimation
 * @returns l'animation Three.js
 */
export default function HomeAnimation() {
    return (
        <div className='none'>
            init()
        </div>
    )
}
