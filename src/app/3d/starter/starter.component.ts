import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../shared/service/demo.service';
import { BasicService } from 'src/app/shared/service/basic.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {

  private canEleId = 'renderCanvas';

  constructor(private engServ: BasicService) { 
    engServ = new BasicService(this.canEleId)
  }

  ngOnInit() {
    this.engServ.addMesh();
    this.engServ.animate();
  }
}