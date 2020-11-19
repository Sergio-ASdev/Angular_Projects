import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Plantilla } from 'src/app/models/plantilla';
import { PlantillaService } from 'src/app/service/plantilla.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  public funciones: Array<String>;
  public plantilla: Array<Plantilla>;

  // para hacer funcionar esto, necesitamos import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
  @ViewChild("cajaselect2") cajaselect2: ElementRef;
  

  constructor(private _service: PlantillaService) { 
    this.plantilla = [];
    this.funciones = [];
  }

  ngOnInit(): void {
    this.cargarFunciones();
    this.cargarPlantilla();
  }

  cargarFunciones(){
    this._service.getAllFunciones().subscribe(response => {
      this.funciones = response;
    }, error => {
      console.log("error");
      console.log(error);
    })
  }

  cargarPlantilla(){
    this._service.getAll().subscribe(response => {
      this.plantilla = response;      
    }, error => {
      console.log("error");
      console.log(error);
    })
  }

  filtrarEmpleados1(evt){
    // console.dir(evt.target.value);
    var seleccion = evt.target.value;
    if(seleccion != "0"){
      this._service.getPlantillaByFunciones(seleccion).subscribe(response => {
        this.plantilla = response;
      }, error => {
        console.log(error);
      });
    } else {
      this.cargarPlantilla();
    }
  }

  filtrarEmpleados2(){
    var funcion = this.cajaselect2.nativeElement.value;
  }

  filtarEmpleados3(){

  }

}
