import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // transparent background
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.TorusKnotGeometry(10, 3, 120, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x7fffd4,
      metalness: 0.6,
      roughness: 0.3,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      torus.rotation.x += 0.005;
      torus.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="background"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
};

export default Background3D;
