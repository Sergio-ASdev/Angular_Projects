import { Component, OnInit } from '@angular/core';
import { EmpleadoRoutingService } from '../../services/empleadorouting.service';
import { Empleado } from '../../models/empleado';
// para poder recibir los parametros de la ruta, necesitamos 
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detallesempleado',
  templateUrl: './detallesempleado.component.html',
  styleUrls: ['./detallesempleado.component.css'],
  providers: [EmpleadoRoutingService]
})
export class DetallesempleadoComponent implements OnInit {
  public empleado: Empleado;
  
  constructor(
    // declaramos el servicio para poder hacer las peticiones
    private _service: EmpleadoRoutingService,
    // declaramos para poder recibir el paametro
    private _activateRoute: ActivatedRoute
  ) { }

  buscarEmpleado(empno){
    this._service.buscarEmpleado(empno).subscribe(response => {
      this.empleado = response;
    });
  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(( params: Params) => {
      var empno = params.empno;
      this.buscarEmpleado(empno);
    })
  }

}
