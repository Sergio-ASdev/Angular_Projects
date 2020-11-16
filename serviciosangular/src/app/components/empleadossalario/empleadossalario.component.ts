import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Empleado} from '../../models/empleado';
import {EmpleadoService} from '../../services/empleado.service';

@Component({
  selector: 'app-empleados-salario',
  templateUrl: './empleadossalario.component.html',
  styleUrls: ['./empleadossalario.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadossalarioComponent implements OnInit {
  public empleados: Array<Empleado>;
  @ViewChild("cajasalario") cajasalario: ElementRef;

  buscarEmpleados(){
    var salario = this.cajasalario.nativeElement.value;
    this._service.buscarEmpleadosSalario(salario).subscribe(response => {
      this.empleados = response;
    });
  }

  constructor(private _service: EmpleadoService) { 
    this.empleados = [];
  }

  ngOnInit(): void {
  }

}
