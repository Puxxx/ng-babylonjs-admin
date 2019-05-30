import { Injectable } from '@angular/core';
import {
  FreeCamera, Scene, Light, Engine, Color4, Vector3,
  HemisphericLight, Mesh
} from 'babylonjs';
import { UserScene } from '../types/scene.type';

@Injectable({
  providedIn: 'root',
})
export class BasicService {

  private userScene: UserScene;
  private sphere: Mesh;
  private ground: Mesh;

  constructor(canvasElement: string) { 
    this.userScene = new UserScene(canvasElement)
  }

  addMesh() :void {

    // 内置的'球'状造型
    this.sphere = Mesh.CreateSphere('sphere1', 16, 2, this.userScene.scene);

    // 将移动球向上 1/2 其高度
    this.sphere.position.y = 1;

    // 内置的'地面'状造型
    this.ground = Mesh.CreateGround('ground1', 6, 6, 2, this.userScene.scene);

  }

  // 启动 场景
  animate(): void {

    this.userScene.engine.runRenderLoop(() => this.userScene.scene.render());

    window.addEventListener('resize', () => {
      this.userScene.engine.resize();
    });
  }
}