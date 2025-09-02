import * as THREE from "three";

export class CSS3DObject extends THREE.Object3D {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    super();
    this.element = element;
    this.element.style.position = "absolute";
    this.addEventListener("removed", () => {
      if (this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    });
  }
}

export class CSS3DRenderer {
  domElement: HTMLElement;
  private cameraElement: HTMLElement;
  private width = 0;
  private height = 0;

  constructor() {
    this.domElement = document.createElement("div");
    this.domElement.style.overflow = "hidden";

    this.cameraElement = document.createElement("div");
    this.cameraElement.style.transformStyle = "preserve-3d";
    this.domElement.appendChild(this.cameraElement);
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.domElement.style.width = width + "px";
    this.domElement.style.height = height + "px";
  }

  render(scene: THREE.Scene, camera: THREE.Camera) {
    const fov = (camera as THREE.PerspectiveCamera).fov || 75;
    this.domElement.style.perspective = fov + "px";

    const elements: HTMLElement[] = [];

    scene.traverse((object) => {
      if ((object as CSS3DObject).element) {
        const element = (object as CSS3DObject).element;
        element.style.transform = this.getObjectCSSMatrix(object.matrixWorld);
        elements.push(element);
        if (!element.parentNode) {
          this.cameraElement.appendChild(element);
        }
      }
    });

    for (let i = 0; i < this.cameraElement.childNodes.length; i++) {
      const child = this.cameraElement.childNodes[i] as HTMLElement;
      if (elements.indexOf(child) === -1) {
        this.cameraElement.removeChild(child);
      }
    }

    const cameraCSSMatrix = this.getCameraCSSMatrix(camera.matrixWorldInverse);
    this.cameraElement.style.transform = cameraCSSMatrix;
  }

  private getCameraCSSMatrix(matrix: THREE.Matrix4): string {
    const elements = matrix.elements;
    return (
      "matrix3d(" +
      [
        elements[0],
        -elements[1],
        elements[2],
        elements[3],
        elements[4],
        -elements[5],
        elements[6],
        elements[7],
        elements[8],
        -elements[9],
        elements[10],
        elements[11],
        elements[12],
        -elements[13],
        elements[14],
        elements[15],
      ].join(",") +
      ")"
    );
  }

  private getObjectCSSMatrix(matrix: THREE.Matrix4): string {
    const elements = matrix.elements;
    return (
      "translate3d(-50%,-50%,0) matrix3d(" +
      elements.join(",") +
      ")"
    );
  }
}
