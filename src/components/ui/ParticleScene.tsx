'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function seededRandom(seed: number) {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

function GoldenDust({ count = 160 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const opacities  = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (seededRandom(i * 4 + 1) - 0.5) * 18;
      positions[i * 3 + 1] = (seededRandom(i * 4 + 2) - 0.5) * 10;
      positions[i * 3 + 2] = (seededRandom(i * 4 + 3) - 0.5) * 6 - 1;
      opacities[i] = seededRandom(i * 4 + 4) * 0.6 + 0.3;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('opacity',  new THREE.BufferAttribute(opacities,  1));
    return geo;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y  = t * 0.022;
    ref.current.position.y  = Math.sin(t * 0.28) * 0.14;
    ref.current.rotation.z  = Math.sin(t * 0.12) * 0.015;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        transparent
        color="#f5a623"
        size={0.042}
        sizeAttenuation
        depthWrite={false}
        opacity={0.72}
        vertexColors={false}
      />
    </points>
  );
}

export default function ParticleScene() {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 7], fov: 52 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <GoldenDust count={160} />
    </Canvas>
  );
}
