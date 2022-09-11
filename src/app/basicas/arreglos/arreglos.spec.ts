// Ejecutar con ng test

import { obtenerRobots } from './arreglos';

// Ignorar todo colocar x en describe(..) => xdescribe(..)
describe('Pruebas de arreglos', () => {

  it('Debe de retornar al menos 3 robots', () => {
    const res = obtenerRobots();

    // Debe ser el arreglo mayor o igual a 3
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  // Añadir un x en it(..) => xit(..) salta esa prueba aún con error
  it('Debe de existir MegaMan y Ultron', () => {
    const res = obtenerRobots();

    // Debe de contener a ...
    expect(res).toContain('MegaMan');
    expect(res).toContain('Ultron');
  });

  xit('Debe de ser Ultron el ultimo elemento', () => {
    const res = obtenerRobots();

    // Debe ser igual .
    expect(res[res.length - 1]).toEqual('Ultron');
  });

});
