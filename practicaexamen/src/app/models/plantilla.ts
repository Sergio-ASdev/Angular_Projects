export class Plantilla {
    constructor(
        public idEmpleado: number,  //	integer($int32)
        public idHospital: number,  //	integer($int32)
        public idSala: number,  //	integer($int32)
        public apellido: string,  //	string        
        public funcion: string,  //	string        
        public turno: string,  //	string        
        public salari: number, 
    ){}
}