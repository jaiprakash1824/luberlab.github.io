import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleEffect = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particleSystemRef = useRef(null);

  useEffect(() => {
    let animationId;

    // Initialize the scene, camera, and renderer only once
    const container = containerRef.current;

    // Scene setup
    sceneRef.current = new THREE.Scene();

    // Camera setup
    cameraRef.current = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    cameraRef.current.position.z = 400;

    // Renderer setup
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(rendererRef.current.domElement);

    // Create particle geometry
    const particleCount = 10000;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 800 - 400; // x
      positions[i * 3 + 1] = Math.random() * 800 - 400; // y
      positions[i * 3 + 2] = Math.random() * 800 - 400; // z
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Create particle material
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.8,
      opacity: 0.2,
      transparent: true,
    });

    // Create particle system
    particleSystemRef.current = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    sceneRef.current.add(particleSystemRef.current);

    // Animation loop
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Update the particle system rotation
      particleSystemRef.current.rotation.x += 0.001;
      particleSystemRef.current.rotation.y += 0.002;

      // Render the scene
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    // Start the animation
    animate();

    // Handle window resizing
    const onWindowResize = () => {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      cancelAnimationFrame(animationId);

      // Clean up renderer
      container.removeChild(rendererRef.current.domElement);
      rendererRef.current.dispose();
    };
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div
      ref={containerRef}
      id="three-particles"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ParticleEffect;
