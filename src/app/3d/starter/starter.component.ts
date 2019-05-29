import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../shared/service/demo.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {

  private canEleId = 'renderCanvas';

  constructor(private engServ: DemoService) { }

  ngOnInit() {
    this.engServ.createScene(this.canEleId);
    this.engServ.animate();
  }
}