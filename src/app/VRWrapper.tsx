"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { CSS3DRenderer, CSS3DObject } from "@/lib/three/CSS3DRenderer";
import { DeviceOrientationControls } from "@/lib/three/DeviceOrientationControls";

export default function VRWrapper({ children }: { children: React.ReactNode }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!mountRef.current || !enabled) return;

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
    mountRef.current.appendChild(renderer.domElement);

    // Wrap children in a DOM element
    const element = document.createElement("div");
    element.style.width = "900px";
    element.style.height = "700px";
    element.style.background = "white";
    element.style.borderRadius = "20px";
    element.style.overflow = "auto";

    // Put React children into the CSS3DObject
    const wrapper = document.createElement("div");
    wrapper.id = "vr-inner";
    element.appendChild(wrapper);

    const object = new CSS3DObject(element);
    scene.add(object);

    // Controls
    const controls = new DeviceOrientationControls(camera);

    // Animate loop
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
  }, [enabled]);

  // ✅ Handles iOS/Android permission requirement
  const enableVR = () => {
    const requestPermission = (
      DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<PermissionState>;
      }
    ).requestPermission;

    if (typeof requestPermission === "function") {
      requestPermission().then((res) => {
        if (res === "granted") {
          setEnabled(true);
        }
      });
    } else {
      setEnabled(true);
    }
  };

  return (
    <>
      {!enabled && (
        <button
          onClick={enableVR}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 
                   px-6 py-3 rounded-xl bg-black text-white shadow-lg"
        >
          Enable VR
        </button>
      )}

      <div ref={mountRef} className="fixed inset-0" />

      {/* Hidden content, extracted into VR */}
      <div id="vr-content" style={{ display: "none" }}>
        {children}
      </div>
    </>
  );
}
