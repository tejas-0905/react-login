import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current; // ✅ Copy ref once

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x7fffd4 });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(50, 50, 50);
    scene.add(light);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // ✅ Safe cleanup
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="background" ref={mountRef}></div>;
};

export default Background3D;
