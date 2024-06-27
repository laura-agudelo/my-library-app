 
import { Libro } from "./libro";

export class Biblioteca {
    nombre: string
    ubicacion: string
    telefono: string
    book: Libro [] = []

    constructor(
    nombre: string,
    ubicacion: string,
    telefono: string,
    ){
    this.nombre = nombre
    this.ubicacion = ubicacion
    this.telefono = telefono
    }

    agregarLibro(libroNuevo:Libro): void{
        this.book.push(libroNuevo)
    }

    eliminarLibro(): any{
     this.book.pop()
    }

    verLibros(){
        const libroPorDefecto = new Libro("Mi persona equivocada","Faty Salinas","poemario","Español",28,"Tapa blanda","978-9915949475",
            "Este libro te hará revivir y despedir entre palabras al amor que nunca pudo ser","Usado","amazon",2022,"luna libros",200,"5.5 x 0.5 x 8.5 pulgadas","260 gramos");
        console.log('pila de libros');
        console.log(this.book,libroPorDefecto);
        
        
    }

}