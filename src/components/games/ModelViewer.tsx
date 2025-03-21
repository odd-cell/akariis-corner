'use client'

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls as OrbitControlsImpl } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader as OBJLoaderImpl } from 'three/examples/jsm/loaders/OBJLoader.js';

interface ModelViewerProps {
  objUrl: string;
  title: string;
  description: string;
}

interface LoadingProgress {
  loaded: number;
  total: number;
}

export default function ModelViewer({ objUrl, title, description }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const frameRef = useRef<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    setError(null);
    setLoading(true);

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls setup
    const controls = new OrbitControlsImpl(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.enablePan = false;
    controlsRef.current = controls;

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Create material
    const material = new THREE.MeshStandardMaterial({
      color: 0x808080,
      metalness: 0.2,
      roughness: 0.8,
      flatShading: false,
      side: THREE.DoubleSide
    });

    // Load model
    const loader = new OBJLoaderImpl();
    loader.load(
      objUrl,
      (object) => {
        try {
          // Center the model
          const box = new THREE.Box3().setFromObject(object);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 2 / maxDim;
          
          object.position.sub(center);
          object.scale.multiplyScalar(scale);

          // Apply material and process geometry
          object.traverse((child: THREE.Object3D) => {
            if (child instanceof THREE.Mesh) {
              // Keep original UV coordinates if they exist
              const originalUVs = child.geometry.attributes.uv;
              
              // Create a new geometry to ensure proper normals
              const geometry = new THREE.BufferGeometry();
              geometry.setAttribute('position', child.geometry.attributes.position);
              if (originalUVs) {
                geometry.setAttribute('uv', originalUVs);
              }
              
              // Compute vertex normals
              geometry.computeVertexNormals();
              
              // Apply material
              child.geometry = geometry;
              child.material = material;
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          scene.add(object);
          setLoading(false);
        } catch (err) {
          console.error('Error processing model:', err);
          setError('Error processing model');
          setLoading(false);
        }
      },
      (xhr: LoadingProgress) => {
        const percent = xhr.loaded / xhr.total * 100;
        console.log(`${percent}% loaded`);
      },
      (error: unknown) => {
        console.error('Error loading model:', error);
        setError('Error loading model');
        setLoading(false);
      }
    );

    // Animation loop
    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    function handleResize() {
      if (!containerRef.current || !camera || !renderer) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
    };
  }, [objUrl]);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden bg-gray-900 relative">
      <div ref={containerRef} className="w-full h-full" />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="text-white">Loading model...</div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="text-red-500">{error}</div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
    </div>
  );
} 