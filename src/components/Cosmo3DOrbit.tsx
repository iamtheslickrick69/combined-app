import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ParticleSphere } from './particle-sphere'
import { Loader2 } from 'lucide-react'

interface Cosmo3DOrbitProps {
  onProjectClick?: (projectIndex: number) => void
}

function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-white/50 animate-spin" />
        <p className="text-white/50 text-sm">Loading 3D experience...</p>
      </div>
    </div>
  )
}

export function Cosmo3DOrbit({ onProjectClick }: Cosmo3DOrbitProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full h-screen bg-black relative">
      {/* Loading Spinner */}
      {isLoading && <LoadingSpinner />}

      {/* 3D Canvas */}
      <div className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Canvas
          camera={{ position: [0, 0, 20], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
          onCreated={() => {
            // Small delay to ensure textures are loaded
            setTimeout(() => setIsLoading(false), 300)
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ParticleSphere onProjectClick={onProjectClick} />
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              minDistance={10}
              maxDistance={50}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}
