import { Component, OnInit } from '@angular/core';
import { EmpleadoRoutingService } from '../../services/empleadorouting.service';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-tablempleados',
  templateUrl: './tablempleados.component.html',
  styleUrls: ['./tablempleados.component.css'],
  providers: [EmpleadoRoutingService]
})
export class TablempleadosComponent implements OnInit {
  public empleados: Array<Empleado>;

  constructor(private _service: EmpleadoRoutingService) {
    this.empleados = [];
  }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response => {
      this.empleados = response;
    }, error => {
      console.log("error");
    });
  }

}
