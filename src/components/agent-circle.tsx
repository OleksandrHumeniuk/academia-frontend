import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function MetallicDisc() {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color('#f5d0c5') }, // Soft pink
      uColorB: { value: new THREE.Color('#2d5a27') }, // Forest green
      uWaveFreq: { value: 8.0 },
      uWaveAmp: { value: 0.3 },
      uNoiseScale: { value: 2.0 },
      uMetallicIntensity: { value: 0.8 },
    }),
    [],
  );

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform float uWaveFreq;
    uniform float uWaveAmp;
    uniform float uNoiseScale;
    uniform float uMetallicIntensity;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 center = vec2(0.5);
      vec2 pos = vUv - center;
      float angle = atan(pos.y, pos.x);
      float dist = length(pos);
      
      // Create dynamic wave pattern
      float timeScale = uTime * 0.2;
      float wavePattern = sin(angle * uWaveFreq + timeScale) * uWaveAmp;
      wavePattern += sin(angle * (uWaveFreq * 0.5) - timeScale * 1.3) * (uWaveAmp * 0.5);
      
      // Add noise variation
      float noise = snoise(pos * uNoiseScale + timeScale) * 0.15;
      noise += snoise(pos * (uNoiseScale * 2.0) - timeScale) * 0.075;
      
      // Combine patterns
      float pattern = wavePattern + noise;
      pattern *= smoothstep(0.0, 0.2, dist) * smoothstep(1.0, 0.8, dist);
      
      // Create metallic reflection
      vec3 viewDir = normalize(vec3(pos * 2.0, 1.0));
      float fresnel = pow(1.0 - abs(dot(viewDir, vec3(0.0, 0.0, 1.0))), 3.0);
      
      // Add dynamic highlights
      float highlight = pow(fresnel + pattern, 2.0) * uMetallicIntensity;
      
      // Mix colors with metallic effect
      vec3 baseColor = mix(uColorA, uColorB, pattern * 0.5 + 0.5);
      vec3 metallicColor = mix(baseColor, vec3(1.0), highlight);
      
      // Add radial sheen
      float radialSheen = pow(1.0 - dist, 2.0) * 0.5;
      metallicColor += vec3(radialSheen);
      
      gl_FragColor = vec4(metallicColor, 1.0);
    }
  `;

  useFrame(({ clock }) => {
    if (meshRef.current) {
      uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <circleGeometry args={[1, 256]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} transparent />
    </mesh>
  );
}

export default function AgentCircle() {
  return (
    <div className="h-[700px] w-[600px]">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <MetallicDisc />
      </Canvas>
    </div>
  );
}
