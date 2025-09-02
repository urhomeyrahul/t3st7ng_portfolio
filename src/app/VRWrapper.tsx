"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { DeviceOrientationControls } from "three/examples/jsm/controls/DeviceOrientationControls.js";

export default function VRWrapper({ children }: { children: React.ReactNode }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(0, 0, 1000);

    // Renderer (CSS3DRenderer makes DOM elements 3D)
    const renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Wrap children in a CSS3DObject
    const element = document.createElement("div");
    element.style.width = "800px";
    element.style.height = "600px";
    element.style.background = "white";
    element.style.borderRadius = "20px";
    element.style.overflow = "auto";

    // Render React children into this div
    element.appendChild(
      (() => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = (document.querySelector("#vr-content")?.innerHTML ?? "");
        return wrapper;
      })()
    );

    const object = new CSS3DObject(element);
    scene.add(object);

    // Controls
    const controls = new DeviceOrientationControls(camera);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      {/* Normal page content hidden from normal flow, extracted later */}
      <div id="vr-content" style={{ display: "none" }}>
        {children}
      </div>
      <div ref={mountRef} className="fixed inset-0" />
    </>
  );
}
