
import { Libro } from './models/libro';
import { Biblioteca } from './models/biblioteca';
import PromptSync from "prompt-sync";

const promptSync = PromptSync();

const miBiblioteca = new Biblioteca ('lago','armenia','3117597157');

function AgregarLibro(): void { 
  const titulo = promptSync("Ingrese el título del libro: ");
  const autor = promptSync("Ingrese el autor del libro: ");
  const genero = promptSync("Ingrese el género del libro: ");
  const idioma = promptSync("Ingrese el idioma del libro: ");
  const precio = parseFloat(promptSync("Ingrese el precio del libro: "));
  const formato = promptSync("Ingrese el formato del libro: ");
  const isbn = promptSync("Ingrese el ISBN del libro: ");
  const descripcion = promptSync("Ingrese la descripción del libro: ");
  const estado = promptSync("Ingrese el estado del libro: ");
  const ubicacion = promptSync("Ingrese la ubicación del libro: ");
  const fecha_publicacion = parseInt(promptSync("Ingrese la fecha de publicación del libro (año): "));
  const editorial = promptSync("Ingrese la editorial del libro: ");
  const paginas = parseInt(promptSync("Ingrese el número de páginas del libro: "));
  const dimensiones = promptSync("Ingrese las dimensiones del libro: ");
  const peso = promptSync("Ingrese el peso del librO: ");

  const nuevoLibro = new Libro(titulo, autor, genero, idioma, precio, formato, isbn, descripcion, estado, ubicacion, fecha_publicacion, editorial, paginas, dimensiones, peso);
  miBiblioteca.agregarLibro(nuevoLibro);
  console.log(`El libro ${titulo} ha sido agregado a la librería`);
}

function eliminarLibro(): void{
    miBiblioteca.eliminarLibro()
    console.log(`el libro ha sido eliminado de la biblioteca `);
}

function verLibros(): void{
    miBiblioteca.verLibros()
}
function mostrarMenu(): void {
        console.log('Bienvenido al sistema de biblioteca');
        console.log('1. agregar libro');
        console.log('2. eliminar libro');
        console.log('3. mostrar lista');
        console.log('4. salir');
    }
    
  function main(): void {
        let opcion: number = 0;
    
        do {
            mostrarMenu();
            opcion = parseInt(promptSync('Ingrese una opción: ') || '0');
    
            switch (opcion) {
                case 1:
                    AgregarLibro()
                    break;
                case 2:
                    eliminarLibro()
                    break;
                case 3:
                   verLibros()
                    break;
                case 4:
                    console.log('saliendo del menu');
                    break;
                default:
                    console.log('Opción inválida. Por favor, ingrese una opción válida.');
                    break;
            }
        } while (opcion !== 4);
    }
    main();
  

