import React, { DOMElement } from 'react'
import * as THREE from 'three'
// @ts-ignore
// eslint-disable-next-line node/no-missing-import
import { SVGRenderer } from 'three/addons/renderers/SVGRenderer.js'
// @ts-ignore
// eslint-disable-next-line node/no-missing-import
import Stats from 'three/addons/libs/stats.module.js'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { createImportSpecifier } from 'typescript'

const { useEffect, useLayoutEffect, useRef } = React
const path = 'http://127.0.0.1:5500/packages/editor/src/statics/LittlestTokyo.glb'

const App = () => {
  const rootRef = useRef()
  useLayoutEffect(() => {
    pageinit()
  }, [])

  function pageinit() {
    let mixer

    const clock = new THREE.Clock()
    const container = rootRef.current

    const stats = new Stats()
    container.appendChild(stats.dom)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.outputEncoding = THREE.sRGBEncoding
    container.appendChild(renderer.domElement)

    const pmremGenerator = new THREE.PMREMGenerator(renderer)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xbfe3dd)
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100)
    camera.position.set(5, 2, 8)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0.5, 0)
    controls.update()
    controls.enablePan = false
    controls.enableDamping = true

    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('js/libs/draco/gltf/')

    const loader = new GLTFLoader()
    loader.setDRACOLoader(dracoLoader)
    loader.load(
      path,
      function (gltf) {
        console.log('gltf:', gltf)
        const model = gltf.scene
        model.position.set(1, 1, 0)
        model.scale.set(0.01, 0.01, 0.01)
        scene.add(model)

        mixer = new THREE.AnimationMixer(model)
        mixer.clipAction(gltf.animations[0]).play()

        animate()
      },
      undefined,
      function (e) {
        console.error(e)
      }
    )

    window.onresize = function () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function animate() {
      requestAnimationFrame(animate)

      const delta = clock.getDelta()

      mixer.update(delta)

      controls.update()

      stats.update()

      renderer.render(scene, camera)
    }
  }

  return <div ref={rootRef}></div>
}

export default App
