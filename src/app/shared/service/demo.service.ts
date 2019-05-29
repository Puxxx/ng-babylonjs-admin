import {
  Engine, Scene, FreeCamera, Light, Vector3, HemisphericLight, MeshBuilder, Mesh
} from 'babylonjs';
import { SkyMaterial } from 'babylonjs-materials';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {

  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private scene: Scene;
  private camera: FreeCamera;
  private light: Light;

  constructor() { }

  createScene(canvasElement: string): void {

    this.canvas = document.getElementById(canvasElement) as HTMLCanvasElement;

    this.engine = new Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true });
    // Create a basic BJS Scene object.
    this.scene = new Scene(this.engine);

    // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
    this.camera = new FreeCamera('camera1', new Vector3(5, 4, -10), this.scene);

    // // Target the camera to scene origin.
    this.camera.setTarget(Vector3.Zero());

    // // Attach the camera to the canvas.
    this.camera.attachControl(this.canvas, false);

    // Create a basic light, aiming 0,1,0 - meaning, to the sky.
    this.light = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene);

    // Create a built-in "sphere" shape; with 16 segments and diameter of 2.
    let sphere = MeshBuilder.CreateSphere('sphere',
      { segments: 16, diameter: 2 }, this.scene);

    // Move the sphere upward 1/2 of its height.
    sphere.position.y = 1;

    // Create a built-in "ground" shape.
    let ground = MeshBuilder.CreateGround('ground',
      { width: 6, height: 6, subdivisions: 2 }, this.scene);

    //sky effect
    // Sky material
    let skyboxMaterial = new SkyMaterial("skyMaterial", this.scene);

    skyboxMaterial.backFaceCulling = false;
    //skyboxMaterial.cachedDefines.FOG = true;

    // Sky mesh (box)
    let skybox = Mesh.CreateBox("skyBox", 100.0, this.scene);
    skybox.material = skyboxMaterial;

    skyboxMaterial.turbidity = 1;
    skyboxMaterial.luminance = 1;

    // Control the planet's orientation over the sun
    skyboxMaterial.inclination = 0.5; // The solar inclination, related to the solar azimuth in interval [0, 1]
    skyboxMaterial.azimuth = 0.25; // The solar azimuth in interval [0, 1]

    // Manually set the sun position
    skyboxMaterial.useSunPosition = true; // Do not set sun position from azimuth and inclination
    skyboxMaterial.sunPosition = new Vector3(0, 25, 0);


    console.log('canvas in...');
  }

  animate(): void {

    this.engine.runRenderLoop(() => this.scene.render());

    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }

}