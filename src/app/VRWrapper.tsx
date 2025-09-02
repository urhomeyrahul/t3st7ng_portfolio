"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { DeviceOrientationControls } from "@/lib/three/DeviceOrientationControls";

export default function VRWrapper({ children }: { children: React.ReactNode }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!enabled || !mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.set(0, 0, 1000);

    // Renderer
    const renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.innerHTML = ""; // Clear old canvas
    mountRef.current.appendChild(renderer.domElement);

    // Create container for React children
    const element = document.createElement("div");
    element.style.width = "800px";
    element.style.height = "600px";
    element.style.background = "white";
    element.style.borderRadius = "20px";
    element.style.overflow = "auto";

    // Put React children into 3D DOM
    const wrapper = document.createElement("div");
    wrapper.innerHTML = document.querySelector("#vr-content")?.innerHTML ?? "";
    element.appendChild(wrapper);

    const object = new CSS3DObject(element);
    scene.add(object);

    // Controls
    const controls = new DeviceOrientationControls(camera);
    controls.connect();

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      controls.disconnect();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [enabled]);

  const enableVR = () => {
    const requestPermission = (DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<PermissionState>;
    }).requestPermission;

    if (typeof requestPermission === "function") {
      requestPermission()
        .then((res) => {
          if (res === "granted") setEnabled(true);
        })
        .catch(() => setEnabled(true));
    } else {
      setEnabled(true);
    }
  };

  return (
    <>
      {!enabled && (
        <button
          onClick={enableVR}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-6 py-3 rounded-xl shadow-lg"
        >
          Enable VR
        </button>
      )}
      <div id="vr-content" style={{ display: "none" }}>
        {children}
      </div>
      <div ref={mountRef} className="fixed inset-0 bg-black" />
    </>
  );
}
