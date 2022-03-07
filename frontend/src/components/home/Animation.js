import * as THREE from 'three'

import vertex from '/static/shaders/vertex.glsl'
import fragment from '/static/shaders/fragment.glsl'
import blue from '/static/source/blue.png'

export default class Animation {
    constructor(options) {
        this.scene = new THREE.Scene()

        this.container = options.dom
        this.width = this.container.offsetWidth
        this.height = this.container.offsetHeight
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.setSize(this.width, this.height)
        this.renderer.setClearColor(0x221a1a, 1)
        this.renderer.physicallyCorrectLights = true
        this.renderer.outputEncoding = THREE.sRGBEncoding

        this.container.appendChild(this.renderer.domElement)

        this.camera = new THREE.OrthographicCamera(
            this.width / -2,
            this.width / 2,
            this.height / 2,
            this.height / -2,
            1,
            1000
        )

        this.camera.position.set(0, 0, 4)
        this.scene.add(this.camera)

        this.mouse = new THREE.Vector2(0, 0)
        this.prevMouse = new THREE.Vector2(0, 0)

        this.currentWave = 0

        this.time = 0
        this.isPlaying = true

        this.mouseEvents()
        this.addObjects()
        this.resize()
        this.render()
        this.setupResize()
    }

    setupResize() {
        //Add an event for the resize of screen
        window.addEventListener('resize', this.resize.bind(this))
    }

    resize() {
        this.width = this.container.offsetWidth
        this.height = this.container.offsetHeight
        this.renderer.setSize(this.width, this.height)
        this.camera.aspect = this.width / this.height

        //Setup image aspect
        this.imageAspect = 853 / 1280
        let a1
        let a2

        if (this.height / this.width > this.imageAspect) {
            a1 = (this.width / this.height) * this.imageAspect
            a2 = 1
        } else {
            a1 = 1
            a2 = (this.height / this.width) * this.imageAspect
        }

        this.material.uniforms.resolution.value.x = this.width
        this.material.uniforms.resolution.value.y = this.height
        this.material.uniforms.resolution.value.z = a1
        this.material.uniforms.resolution.value.w = a2

        this.camera.updateProjectionMatrix()
    }

    mouseEvents() {
        window.addEventListener('mousemove', (event) => {
            this.mouse.x = event.clientX - this.width / 2
            this.mouse.y = this.height / 2 - event.clientY
        })
    }

    addObject() {
        let that = this

        //Setup shader material
        this.material = new THREE.ShaderMaterial({
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

        this.max = 50

        //Setup geometry
        this.geometry = new THREE.PlaneBufferGeometry(64, 64, 1, 1)
        this.meshes = []

        for (let i = 0; i < this.max; i++) {
            let m = new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(blue),
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthTest: true,
                depthWrite: true,
            })

            //Setup a mesh
            let mesh = new THREE.Mesh(this.geometry, m)
            //mesh.visible = false;
            mesh.rotation.z = 2 * Math.PI * Math.random()

            this.scene.add(mesh)
            this.meshes.push(mesh)
        }
    }

    stop() {
        this.isPlaying = false
    }

    play() {
        if (!this.isPlaying) {
            this.render()
            this.isPlaying = true
        }
    }

    setNewWave(x, y, index) {
        let mesh = this.meshes[index]
        mesh.visible = true
        mesh.position.x = x
        mesh.position.y = y
        mesh.scale.x = mesh.scale.y = 0.2
        mesh.material.opacity = 0.5
    }

    trackMousePosition() {
        if (
            Math.abs(this.mouse.x - this.prevMouse.x) < 4 &&
            Math.abs(this.mouse.y - this.prevMouse.y) < 4
        ) {
            //nothing
        } else {
            this.setNewWave(this.mouse.x, this.mouse.y, this.currentWave)
            this.currentWave = (this.currentWave + 1) % this.max
        }

        this.prevMouse.x = this.mouse.x
        this.prevMouse.y = this.mouse.y
    }

    render() {
        this.trackMousePosition()
        //Iteration of time for animation
        if (!this.isPlaying) return
        this.time += 0.05
        this.material.uniforms.time.value = this.time

        //render of scene
        this.renderer.render(this.scene, this.camera)
        //Synchronize a render to the animation
        requestAnimationFrame(this.render.bind(this))

        this.meshes.forEach((mesh) => {
            if (mesh.visible) {
                mesh.rotation.z += 0.002
                mesh.material.opacity *= 0.96

                mesh.scale.x = 0.955 * mesh.scale.x + 0.168
                mesh.scale.y = mesh.scale.x

                if (mesh.material.opacity < 0.002) {
                    mesh.visible = false
                }
            }
        })
    }
}

new Animation({
    dom: document.getElementById('container'),
})
