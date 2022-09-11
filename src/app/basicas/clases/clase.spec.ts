// Ejecutar con ng test

import { Jugador } from './clase';

describe('Pruebas de clase', () => {

  let jugador = new Jugador(); // Inicializar una vez

  // Ciclo de vida de las pruebas
  // #1 Se ejecuta antes que todo
  beforeAll(() => { // Solo se ejecuta una vez
    // console.log('beforeAll');
  });

  // #2 Se ejecuta antes de cada una de las pruebas
  beforeEach(() => {
    // console.log('beforeEach');
    // #1 opcion =>  // jugador.hp = 100;
    jugador = new Jugador();
  });

  // #3 Se ejecuta despues de todas, cuando finalizan
  afterAll(() => {
    // console.log('afterAll');
  });

  // #4 Se ejecuta despues de cada una de las pruebas que finalizan
  afterEach(() => {
    // console.log('afterEach');
    // #2 opcion =>  // jugador.hp = 100;

  });

  it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {
    // const jugador = new Jugador(); // Inicializar
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
    // const jugador = new Jugador(); // Inicializar
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Debe de retornar 0 de hp, si recibe 100 de daño ó más', () => {
    const resp = jugador.recibeDanio(100);
    expect(resp).toBe(0);
  });

});
