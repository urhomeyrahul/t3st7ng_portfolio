import * as THREE from "three";

export class DeviceOrientationControls {
  object: THREE.Camera;
  enabled = true;
  deviceOrientation: DeviceOrientationEvent | null = null;
  screenOrientation = 0;

  alphaOffset = 0; // radians
  onChange: (() => void) | null = null;

  private _deviceOrientationHandler: (event: DeviceOrientationEvent) => void;
  private _screenOrientationHandler: () => void;

  constructor(object: THREE.Camera) {
    this.object = object;

    this._deviceOrientationHandler = (event: DeviceOrientationEvent) => {
      this.deviceOrientation = event;
    };

    this._screenOrientationHandler = () => {
      this.screenOrientation = (window.orientation as number) || 0;
    };

    this.connect();
  }

  connect() {
    this._screenOrientationHandler();
    window.addEventListener("orientationchange", this._screenOrientationHandler);
    window.addEventListener("deviceorientation", this._deviceOrientationHandler);
    this.enabled = true;
  }

  disconnect() {
    window.removeEventListener("orientationchange", this._screenOrientationHandler);
    window.removeEventListener("deviceorientation", this._deviceOrientationHandler);
    this.enabled = false;
  }

  dispose() {
    this.disconnect();
  }

  update() {
    if (!this.enabled || !this.deviceOrientation) return;

    const { alpha, beta, gamma } = this.deviceOrientation;

    if (alpha == null || beta == null || gamma == null) return;

    const zee = new THREE.Vector3(0, 0, 1);
    const euler = new THREE.Euler();
    const q0 = new THREE.Quaternion();
    const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));

    const orient = this.screenOrientation
      ? this.screenOrientation * THREE.MathUtils.DEG2RAD
      : 0;

    euler.set(
      beta * THREE.MathUtils.DEG2RAD,
      alpha * THREE.MathUtils.DEG2RAD + this.alphaOffset,
      -gamma * THREE.MathUtils.DEG2RAD,
      "YXZ"
    );

    this.object.quaternion.setFromEuler(euler);
    this.object.quaternion.multiply(q1);
    this.object.quaternion.multiply(q0.setFromAxisAngle(zee, -orient));

    if (this.onChange) this.onChange();
  }
}
