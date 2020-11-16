import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Empleado} from '../../models/empleado';
import {EmpleadoService} from '../../services/empleado.service';

@Component({
  selector: 'app-empleados-oficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosoficioComponent implements OnInit {
  public empleados: Array<Empleado>;
  public oficios: Array<Empleado>;
  public empleadosDeLosOficios: Array<Empleado>;

  @ViewChild("cajaoficio") cajaoficio: ElementRef;

  constructor(private _service: EmpleadoService) { 
    this.empleados = [];
    this.oficios = [];
  }

  buscarEmpleados(){
    this._service.buscarOficios().subscribe(response => {
      this.oficios = response;
      console.log(this.oficios);
    });
  }


  buscarEmpleados2(event){
    // lo inicializo a vacio siempre que se ejecute porque no quiero que se me almacenen los valores
    this.oficios = [];

    var oficio = this.cajaoficio.nativeElement.value;
    console.dir(event.target.options);
    var options = event.target.options
    for (let i = 0; i < options.length; i++) {
      if(options[i].selected){
        console.log(options[i].value);
        var oficio = options[i].value;
        this._service.buscarEmpleadosOficio(oficio).subscribe(response => {
          this.empleadosDeLosOficios.push(response);
        });
      }
    }
    /*
    this._service.buscarEmpleadosOficio(oficio).subscribe(response => {
      this.empleados = response;
      // console.log(this.empleados);
    });
    */
  }

  

  ngOnInit(): void {
    this._service.buscarOficios().subscribe(response => {
      this.oficios = response;
      console.log(this.oficios);
    });
  }

}
