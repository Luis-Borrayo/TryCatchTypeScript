// Ejercicio 1------------------------------------------------------------------------------
function numeroAString(input: any): string {
    try {
        let numero: number = Number(input);
        if (isNaN(numero)) {
            throw new Error('El argumento no es un número válido');
        }
        return numero.toString();
    } catch (error) {
        return (error as Error).message;
    }
}
console.log(numeroAString(1234));

// Ejercicio 2-----------------------------------------------------------------------------
function obtenerElementoEnIndice<T>(arreglo: T[], indice: number): T | string {
    try {
        if (indice < 0 || indice >= arreglo.length) {
            throw new Error('Índice fuera del rango del arreglo');
        }
        return arreglo[indice];
    } catch (error) {
        return (error as Error).message;
    }
}
const numeros = [1, 2, 3, 4, 5, 6];
const palabras = ['manzana', 'banana', 'cereza'];

console.log(obtenerElementoEnIndice(numeros, 2));
console.log(obtenerElementoEnIndice(palabras, -1));


// Ejercicio 4-----------------------------------------------------------------------
function calcularAreaTriangulo(base: number, altura: number): string {
    try {
        if (base < 0 || altura < 0) {
            throw new Error('La base y la altura deben ser números no negativos');
        }
        const area: number = (base * altura) / 2;
        return `El área del triángulo es ${area}`;
    } catch (error) {
        return (error as Error).message;
    }
}
console.log(calcularAreaTriangulo(10, 5));

// Ejercicio 5----------------------------------------------------------------------------
import * as fs from 'fs';
import * as path from 'path';

function leerArchivoDesdeRuta(ruta: string): string {
    let archivoDescriptor: number | undefined;
    try {
        const rutaCompleta = path.resolve(ruta);
        archivoDescriptor = fs.openSync(rutaCompleta, 'r');
        const contenidoBuffer = fs.readFileSync(archivoDescriptor, 'utf-8');
        return contenidoBuffer;
    } catch (error) {
        console.error('Error al leer el archivo:', error);
        return 'Error al leer el archivo';
    } finally {
        if (archivoDescriptor !== undefined) {
            fs.closeSync(archivoDescriptor);
        }
    }
}
const rutaArchivo = './src/Archivo de ruta.txt';
const resultado = leerArchivoDesdeRuta(rutaArchivo);
console.log(resultado);

// Ejercicio 6------------------------------------------------------------
function leerArchivoSimulado() {
    let archivo: any;
    try {
        archivo = abrirArchivoSimulado('datos.txt');
        console.log('Leyendo el archivo...');
    } catch (error) {
        console.error('Error al leer el archivo:', error);
    } finally {
        if (archivo) {
            cerrarArchivoSimulado(archivo);
        }
    }
}

function abrirArchivoSimulado(nombre: string) {
    console.log(`Abriendo archivo: ${nombre}`);
    return { nombre: nombre };
}

function cerrarArchivoSimulado(archivo: any) {
    console.log(`Cerrando archivo: ${archivo.nombre}`);
}

leerArchivoSimulado();

function operacionMatematicaCompleja(x: number, y: number): number {
    if (y === 0) {
        throw new Error('División por cero');
    }
    return x / y + Math.sqrt(x) - Math.log(y);
}

function ejecutarOperacion(x: number, y: number) {
    try {
        const resultado = operacionMatematicaCompleja(x, y);
        console.log(`Resultado de la operación compleja: ${resultado}`);
    } catch (error) {
        console.error('Error al realizar la operación compleja:', error);
    }
}

ejecutarOperacion(2, 5);