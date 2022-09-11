// Ejecutar con ng test

import { usuarioIngresado } from './booleanos';

describe('Pruebas de Booleanos', () => {
  it('Debe de retornar true', () => {

    const res = usuarioIngresado();

    expect(res).toBe(true); // Debe ser true
    expect(res).toBeTruthy(); // Debe ser true
    // expect(res).toBeFalsy(); // Debe ser false
  });
});
