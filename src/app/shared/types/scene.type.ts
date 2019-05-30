import { Engine, Scene, FreeCamera, Light, Color4, Vector3, HemisphericLight } from 'babylonjs';


export class UserScene {
   canvas: HTMLCanvasElement;
   engine: Engine;
   scene: Scene;
   camera: FreeCamera;
   light: Light;

  constructor(canvasElement: string) {
    this.createScene(canvasElement);
  }

  createScene(canvasElementInput: string): void {
    //从上面的HTML里获取我们的画布元素
    // get the HTML element of canvas
    this.canvas = document.getElementById(canvasElementInput) as HTMLCanvasElement;

    // 加载BABYLON 3D引擎
    // loading Babylon 3D engin
    this.engine = new Engine(this.canvas, true);

    // 现在创建一个Babylon场景对象
    // create a basic babylonjs Scene object
    this.scene = new Scene(this.engine)

    // 改变场景的背景色为绿色.
    // change scene background color to green.
    this.scene.clearColor = new Color4(0, 1, 0);

    // 创建并放置一个自由相机
    // create a FreeCamera, and set its position to (0,5,-10)
    this.camera = new FreeCamera('camera1', new Vector3(0, 5, -10), this.scene);

    // 将相机朝向对准场景原点
    // Target the camera to scene origin
    this.camera.setTarget(Vector3.Zero());

    // 将相机附加到画布上
    // Attach the camera to the canvas
    this.camera.attachControl(this.canvas, false);

    // 创建一个光源，在0,1,0点朝向天空.
    // Create a basic light, aiming 0,1,0 - meaning, to the sky.
    this.light = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene);

    // 将光源光线置为昏暗
    // set intensity property of light to dim
    this.light.intensity = 0.5;
  }
}