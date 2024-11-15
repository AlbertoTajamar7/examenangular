import { Component,OnInit } from '@angular/core';
import { ServiceCubos } from '../../service/service.cubos';
import { Cubos } from './../../models/cubos';
import { response } from 'express';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponentComponent implements OnInit{
  public Cubos !: Array<Cubos>;
  constructor(private _service:ServiceCubos){}
  ngOnInit(): void {
      this._service.getCubos().subscribe(response=>{
        this.Cubos = response
      })
  }

}
