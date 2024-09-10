import { useEffect } from "react";
import * as THREE from "three";
import "./WavesBackground.css";

const WavesBackground = () => {
  useEffect(() => {
    let container;
    let camera, scene, renderer;
    let particles,
      count = 0;
    const SEPARATION = 40,
      AMOUNTX = 130,
      AMOUNTY = 35;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const init = () => {
      container = document.createElement("div");
      document.body.appendChild(container);

      camera = new THREE.PerspectiveCamera(
        120,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.y = 150;
      camera.position.z = 300;
      camera.rotation.x = 0.35;

      scene = new THREE.Scene();

      const numParticles = AMOUNTX * AMOUNTY;
      particles = new Array(numParticles);

      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2, // Adjust the size of the particles here
        opacity: 0.7, // Adjust opacity if needed
      });

      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(numParticles * 3);

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          const z = iy * SEPARATION - (AMOUNTY * SEPARATION - 10);
          positions[i] = x;
          positions[i + 1] = 0; // Initial y position is 0
          positions[i + 2] = z;
          i += 3;
        }
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      const points = new THREE.Points(geometry, material);
      scene.add(points);

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 1); // Background color
      container.appendChild(renderer.domElement);

      window.addEventListener("resize", onWindowResize);

      const animate = () => {
        requestAnimationFrame(animate);
        render(points, geometry);
      };

      animate();
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const render = (points, geometry) => {
      const positions = geometry.attributes.position.array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i + 1] =
            Math.sin((ix + count) * 0.5) * 20 +
            Math.sin((iy + count) * 0.5) * 20;
          i += 3;
        }
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.1; // Speed of wave animation
    };

    init();

    // Cleanup when the component unmounts
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return null; // This component does not render any JSX, it handles the Three.js canvas creation
};

export default WavesBackground;
