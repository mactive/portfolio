import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island'

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1, 4.7, 0]
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }
    return { screenScale, screenPosition, rotation }
  }

  const { screenScale, screenPosition, rotation } = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000, position: [0, 0, 10] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <spotLight />
          <hemisphereLight />
          <Island scale={screenScale} position={screenPosition} rotation={rotation} />
        </Suspense> 
      </Canvas>
    </section>
  )
}

export default Home