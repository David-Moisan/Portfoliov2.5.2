import * as THREE from 'three'
import React from 'react'

import vertex from '/static/shaders/vertex.glsl'
import fragment from '/static/shaders/fragment.glsl'
import blue from '/static/source/blue.png'

/**Général THREE variable*/
let scene, camera, renderer, domEl
/**Size variables */
let width, height
/**Object variable */
let material, geometry, mesh
/**Animation variable */
let isPlaying = true
let time = 0
/**Personal variables */
let mouse = new THREE.Vector2(0, 0)
let prevMouse = new THREE.Vector2(0, 0)
let currentWave = 0
let max = 50
let meshes = []

function init() {
    scene = new THREE.Scene()

    width = window.innerWidth
    height = window.innerHeight

    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(0x221a1a, 1)
    renderer.physicallyCorrectLights = true
    renderer.outputEncoding = THREE.sRGBEncoding
    domEl = document
        .getElementById('container')
        .appendChild(renderer.domElement)

    camera = new THREE.OrthographicCamera(
        width / -2,
        width / 2,
        height / 2,
        height / -2,
        1,
        1000
    )
    camera.position.set(0, 0, 4)
    scene.add(camera)

    mouseEvent()
    addObjects()
    resize()
    render()
    setupResize()
}

function setupResize() {
    window.addEventListener('resize', resize)
}

function resize() {
    let imageAspect = 853 / 1280
    let a1
    let a2

    if (height / width > imageAspect) {
        a1 = (width / height) * imageAspect
        a2 = 1
    } else {
        a1 = 1
        a2 = (height / width) * imageAspect
    }

    material.uniforms.resolution.value.x = width
    material.uniforms.resolution.value.y = height
    material.uniforms.resolution.value.z = a1
    material.uniforms.resolution.value.w = a2

    camera.updateProjectionMatrix()
}

function mouseEvent() {
    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX - width / 2
        mouse.y = height / 2 - event.clientY
    })
}

function addObjects() {
    material = new THREE.ShaderMaterial({
        extensions: {
            derivatives: '#extension GL_OES_standard_derivatives : enable',
        },
        side: THREE.DoubleSide,
        uniforms: {
            time: { value: 0 },
            uDisplacement: { value: null },
            uTexture: { value: new THREE.TextureLoader().load(blue) },
            resolution: { value: new THREE.Vector4() },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
    })

    geometry = new THREE.PlaneBufferGeometry(64, 64, 1, 1)

    for (let i = 0; i < max; i++) {
        let m = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(blue),
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthTest: true,
            depthWrite: true,
            reflectivity: 1,
        })

        mesh = new THREE.Mesh(geometry, m)
        mesh.visible = false
        //mesh.rotation.z = 2 * Math.PI * Math.random()
        scene.add(mesh)
        meshes.push(mesh)
    }
}

function stop() {
    isPlaying = false
}

function play() {
    if (!isPlaying) {
        isPlaying = true
        render()
    }
}

function setNewWave(x, y, index) {
    mesh = meshes[index]
    mesh.visible = true
    mesh.position.x = x
    mesh.position.y = y
    mesh.scale.x = mesh.scale.y = 0.2
    mesh.material.opacity = 0.5
}

function trackMousePosition() {
    if (
        !Math.abs(mouse.x - prevMouse.x) < 4 &&
        !Math.abs(mouse.y - prevMouse.y) < 4
    ) {
        setNewWave(mouse.x, mouse.y, currentWave)
        currentWave = (currentWave + 1) % max
    }
    prevMouse.x = mouse.x
    prevMouse.y = mouse.y
}

function render() {
    trackMousePosition()
    if (!isPlaying) return
    time += 0.05
    material.uniforms.time.value = time
    requestAnimationFrame(render)
    renderer.render(scene, camera)

    meshes.forEach((mesh) => {
        if (mesh.visible) {
            mesh.rotation.z += 0.002
            mesh.material.opacity *= 0.96

            mesh.scale.x = 0.982 * mesh.scale.x + 0.108
            mesh.scale.y = mesh.scale.x

            if (mesh.material.opacity < 0.002) {
                mesh.visible = false
            }
        }
    })
}

init()

export default function HomeAnimation() {
    return <div></div>
}
