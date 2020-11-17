export class Pelicula{
    constructor(
        public IdPelicula: number,
        public IdDistribuidor: number,
        public IdGenero: number,
        public Titulo: string,
        public IdNacionalidad: number,
        public Argumento: string,
        public Foto: string,
        public FechaEstreno: string, // no existe Date en angular, habria que usar el date de js nativo como el number y string entiendo
        public Actores: string,
        public Director: string,
        public Duracion: number,
        public Precio: number,
        public YouTube: string,
        public EnlaceVideo: string,
    ){}
}