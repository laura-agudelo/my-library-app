// Importamos las clases
import { Libro } from './libro';
import { Cliente } from './cliente';
import { Biblioteca } from './biblioteca';

// Creamos un array para almacenar los libros
let libros: Libro[] = [];

// Función para mostrar el menú
function mostrarMenu(): void {
    console.log('Bienvenido al sistema de biblioteca');
    console.log('1. Insertar libro');
    console.log('2. Buscar libro por ISBN');
    console.log('3. Eliminar libro por ISBN');
    console.log('4. Insertar cliente');
    console.log('5. Buscar cliente por ID');
    console.log('6. Eliminar cliente por ID');
    console.log('7. Insertar biblioteca');
    console.log('8. Buscar biblioteca por nombre');
    console.log('9. Salir');
}

// Función para insertar un libro
function insertarLibro(): void {
    // Aquí puedes agregar lógica para pedir datos al usuario y crear un nuevo libro
    // Por ejemplo:
    let nuevoLibro = new Libro(
        'Título del libro',
        'Autor del libro',
        'Género',
        'Idioma',
        19.99,
        'Tapa blanda',
        9781234567890,
        'Descripción del libro',
        'Nuevo',
        'Estantería A',
        new Date('2024-06-25'),
        'Editorial',
        300,
        15.2,
        0.8
    );

    libros.push(nuevoLibro);
    console.log('Libro insertado correctamente.');
}

// Función para buscar un libro por ISBN
function buscarLibroPorISBN(isbn: number): Libro | undefined {
    return libros.find(libro => libro.isbn === isbn);
}

// Función para eliminar un libro por ISBN
function eliminarLibroPorISBN(isbn: number): void {
    libros = libros.filter(libro => libro.isbn !== isbn);
    console.log('Libro eliminado correctamente.');
}

// Función para insertar un cliente
function insertarCliente(): void {
    // Aquí puedes agregar lógica para pedir datos al usuario y crear un nuevo cliente
}

// Función para buscar un cliente por ID
function buscarClientePorID(id: number): Cliente | undefined {
    // Aquí puedes agregar lógica para buscar un cliente por su ID
}

// Función para eliminar un cliente por ID
function eliminarClientePorID(id: number): void {
    // Aquí puedes agregar lógica para eliminar un cliente por su ID
}

// Función para insertar una biblioteca
function insertarBiblioteca(): void {
    // Aquí puedes agregar lógica para pedir datos al usuario y crear una nueva biblioteca
}

// Función para buscar una biblioteca por nombre
function buscarBibliotecaPorNombre(nombre: string): Biblioteca | undefined {
    // Aquí puedes agregar lógica para buscar una biblioteca por su nombre
}

// Función principal que ejecuta el menú
function main(): void {
    let opcion: number = 0;

    do {
        mostrarMenu();
        opcion = parseInt(prompt('Ingrese una opción: ') || '0');

        switch (opcion) {
            case 1:
                insertarLibro();
                break;
            case 2:
                let isbnBuscar = parseInt(prompt('Ingrese el ISBN del libro a buscar: ') || '0');
                let libroEncontrado = buscarLibroPorISBN(isbnBuscar);
                if (libroEncontrado) {
                    console.log('Libro encontrado:', libroEncontrado);
                } else {
                    console.log('Libro no encontrado.');
                }
                break;
            case 3:
                let isbnEliminar = parseInt(prompt('Ingrese el ISBN del libro a eliminar: ') || '0');
                eliminarLibroPorISBN(isbnEliminar);
                break;
            case 4:
                insertarCliente();
                break;
            case 5:
                let idBuscar = parseInt(prompt('Ingrese el ID del cliente a buscar: ') || '0');
                let clienteEncontrado = buscarClientePorID(idBuscar);
                if (clienteEncontrado) {
                    console.log('Cliente encontrado:', clienteEncontrado);
                } else {
                    console.log('Cliente no encontrado.');
                }
                break;
            case 6:
                let idEliminar = parseInt(prompt('Ingrese el ID del cliente a eliminar: ') || '0');
                eliminarClientePorID(idEliminar);
                break;
            case 7:
                insertarBiblioteca();
                break;
            case 8:
                let nombreBuscar = prompt('Ingrese el nombre de la biblioteca a buscar: ');
                let bibliotecaEncontrada = buscarBibliotecaPorNombre(nombreBuscar);
                if (bibliotecaEncontrada) {
                    console.log('Biblioteca encontrada:', bibliotecaEncontrada);
                } else {
                    console.log('Biblioteca no encontrada.');
                }
                break;
            case 9:
                console.log('Saliendo del sistema...');
                break;
            default:
                console.log('Opción inválida. Por favor, ingrese una opción válida.');
                break;
        }
    } while (opcion !== 9);
}

// Ejecutamos la función principal al iniciar el programa
main();
