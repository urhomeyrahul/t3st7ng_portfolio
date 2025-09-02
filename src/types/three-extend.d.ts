declare module "three/examples/jsm/renderers/CSS3DRenderer.js" {
  import * as THREE from "three";
  export class CSS3DRenderer {
    domElement: HTMLElement;
    setSize(width: number, height: number): void;
    render(scene: THREE.Scene, camera: THREE.Camera): void;
  }
  export class CSS3DObject extends THREE.Object3D {
    constructor(element: HTMLElement);
    element: HTMLElement;
  }
}

declare module "three/examples/jsm/controls/DeviceOrientationControls.js" {
  import * as THREE from "three";
  export class DeviceOrientationControls {
    constructor(object: THREE.Camera);
    connect(): void;
    disconnect(): void;
    update(): void;
    dispose(): void;
  }
}
