export class Producto {
    public nombre: string;
    public imagen: string;
    public precio: number;

    // Podemos dejarlo vacio tambien
    constructor(nom, img, precio){
        this.nombre = nom;
        this.imagen = img;
        this.precio = precio;
    }
}