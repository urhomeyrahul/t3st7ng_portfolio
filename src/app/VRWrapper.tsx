"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { CSS3DRenderer, CSS3DObject } from "@/lib/three/CSS3DRenderer";
import { DeviceOrientationControls } from "@/lib/three/DeviceOrientationControls";

export default function VRWrapper({ children }: { children: React.ReactNode }) {
    const mountRef = useRef<HTMLDivElement>(null);
    const [controls, setControls] = useState<DeviceOrientationControls | null>(null);

    useEffect(() => {
        if (typeof window === "undefined" || !mountRef.current) return;

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

        // Wrap children
        const element = document.createElement("div");
        element.style.width = "800px";
        element.style.height = "600px";
        element.style.background = "white";
        element.style.borderRadius = "20px";
        element.style.overflow = "auto";

        const wrapper = document.createElement("div");
        wrapper.innerHTML = document.querySelector("#vr-content")?.innerHTML ?? "";
        element.appendChild(wrapper);

        const object = new CSS3DObject(element);
        scene.add(object);

        // Controls (initialized but not connected yet)
        const ctrls = new DeviceOrientationControls(camera);
        setControls(ctrls);

        // Animate loop
        const animate = () => {
            requestAnimationFrame(animate);
            ctrls.update();
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

    const enableVR = () => {
        if (controls) {
            try {
                // Needed on iOS Safari
                (DeviceOrientationEvent as any).requestPermission?.().then(() => {
                    controls.connect();
                }).catch(() => {
                    controls.connect();
                });
            } catch {
                controls.connect();
            }
        }
    };

    return (
        <>
            {/* Hidden content extracted into VR */}
            <div id="vr-content" style={{ display: "none" }}>
                {children}
            </div>

            {/* Mount point */}
            <div ref={mountRef} className="fixed inset-0" />

            {/* VR enable button */}
            <button
                onClick={enableVR}
                className="absolute top-4 left-4 z-50 bg-black text-white px-4 py-2 rounded-lg shadow-lg"
            >
                Enable VR
            </button>
        </>
    );
}
