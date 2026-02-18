"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"
import { useRef, useMemo } from "react"

function GlobeMesh() {
  const groupRef = useRef<THREE.Group>(null!)
  const texture = useTexture("/textures/earth.jpg")

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015
    }
  })

  const positions = useMemo(() => {
    const coords = [
      [40.7128, -74.006],     // New York
      [-23.5505, -46.6333],   // São Paulo
      [35.6762, 139.6503],    // Tokyo
      [51.5072, -0.1276],     // London
      [28.6139, 77.209],      // Delhi
    ]

    const radius = 2.02
    const temp: number[] = []

    coords.forEach(([lat, lon]) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lon + 180) * (Math.PI / 180)

      const x = -radius * Math.sin(phi) * Math.cos(theta)
      const z = radius * Math.sin(phi) * Math.sin(theta)
      const y = radius * Math.cos(phi)

      temp.push(x, y, z)
    })

    return new Float32Array(temp)
  }, [])

  return (
    
    <group ref={groupRef}>

      {/* Terra */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          emissive="#0ea5e9"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Pontos */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="red"
          size={0.1}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  )
}

export default function Globe() {
  return (

  
<div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-black p-6 rounded-2xl shadow-lg ">
<div className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
  Principais pontos de observação
</div>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 3, 5]} intensity={1.2} />
        <GlobeMesh />
      </Canvas>
    </div>
  )
}
