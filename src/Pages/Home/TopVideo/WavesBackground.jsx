import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./WavesBackground.css";

const WavesBackground = () => {
  const containerRef = useRef(null); // Use a ref for the container

  useEffect(() => {
    let container = containerRef.current;
    let camera, scene, renderer;
    // eslint-disable-next-line no-unused-vars
    let particles,
      count = 0;
    const SEPARATION = 40,
      AMOUNTX = 130,
      AMOUNTY = 35;

    // eslint-disable-next-line no-unused-vars
    let windowHalfX = window.innerWidth / 2;
    // eslint-disable-next-line no-unused-vars
    let windowHalfY = window.innerHeight / 2;

    const init = () => {
      // Ensure we append to the specific container rather than the body
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
        color: 0x0064b1,
        size: 2,
        opacity: 0.7,
      });

      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(numParticles * 3);

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          const z = iy * SEPARATION - (AMOUNTY * SEPARATION - 10);
          positions[i] = x;
          positions[i + 1] = 0;
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
      // renderer.setClearColor(0x000000, 1);
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
      count += 0.04;
    };

    init();

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="waves-background-container" // Reference the CSS class
    />
  );
};

export default WavesBackground;
