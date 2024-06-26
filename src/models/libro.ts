

export class Libro {
    titulo: string;
    autor: string;
    genero: string;
    idioma: string;
    precio: number;
    formato: string;
    isbn: number;
    descripcion: string;
    estado: string;
    ubicacion: string;
    fecha_publicacion: Date;
    editorial: string;
    paginas: number;
    dimensiones: number;
    peso: number;

constructor (
    titulo: string,
    autor: string,
    genero: string,
    idioma: string,
    precio: number,
    formato: string,
    isbn: number,
    descripcion: string,
    estado: string,
    ubicacion: string,
    fecha_publicacion: Date,
    editorial: string,
    paginas: number,
    dimensiones: number,
    peso: number,
){
this.titulo = titulo;
this.autor = autor;
this.genero = genero;
this.idioma = idioma;
this.precio = precio,
this.formato = formato;
this.isbn = isbn;
this.descripcion = descripcion;
this.estado = estado;
this.ubicacion = ubicacion;
this.fecha_publicacion = fecha_publicacion;
this.editorial = editorial;
this.paginas = paginas;
this.dimensiones = dimensiones;
this.peso = peso;
}
}