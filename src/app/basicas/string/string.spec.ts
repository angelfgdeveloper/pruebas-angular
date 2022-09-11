import { mensaje } from './string';

// Pruebas con Jasmine
// #1 Siver para agrupar pruebas
// describe('Pruebas de Strings');

// #2 Es una prueba
// it('Debe de regresar un string');
// it('Debe de contener un nombre');

describe('Pruebas de Strings', () => {

  it('Debe regresar un String', () => {
    const respuesta = mensaje('Angel'); // Funcion a probar
    // Espera que la respuesta sea algo en particular...
    expect(typeof respuesta).toBe('string'); // Debe ser un string
  });

  it('Debe retornar un saludo con el nombre enviado', () => {
    const nombre = 'Angel';
    const respuesta = mensaje(nombre); // Funcion a probar
    // Espera que la respuesta sea algo en particular...
    // expect(respuesta).toBe('Saludos Angel'); // Debe regresar la respuesta esperada
    expect(respuesta).toContain(nombre); // Contiene ese nombre
  });

});
