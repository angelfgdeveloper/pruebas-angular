import { of, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService(null!);

  beforeAll(() => {
    componente = new MedicosComponent(servicio);
  })

  beforeEach(() => {

  });

  it('Debe de cargar los médicos', () => {

    const medicos = ['medico1', 'medico2', 'medico3'];

    // Espia al servicio y cuando manden a llamar getMedicos()
    // vas a llamar y ejecutar lo siguiente
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return of([ medicos ]);
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);

  });

  it('Debe de llamar al servidor para agregar un médico', () => {

    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
      return of({});
    });

    componente.agregarMedico();

    // Verifica que sea llamado al metodo para agregar un médico
    expect(espia).toHaveBeenCalled();

  });

  it('Debe de agregar un nuevo médico al arreglo de médicos', () => {
    const medico = { id: 1, nombre: 'Juan' };

    // Regresa un valor en el espia - el medico de ejemplo
    spyOn(servicio, 'agregarMedico').and.returnValue( from([ medico ]));

    componente.agregarMedico();

    // expect(componente.medicos.length).toBe(1);

    // Confirmar que el medico que yo agrege en el espia este incluido en el arreglo
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar el médico';

    // Regresa un error y espera que sean controlados en nuestra aplicación
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(() => miError));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe de llamar al servidor para borrar un médico', () => {

    // Para que no aparezca el prompt o mensaje de alerta al borrar, el espia lo da por hecho que si toco en el
    // boton para confirmar
    spyOn(window, 'confirm').and.returnValue(true);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of({}));

    componente.borrarMedico('1');

    // Que sea llamado con un argumento
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No debe de llamar al servidor para borrar un médico', () => {

    // Para que no aparezca el prompt o mensaje de alerta al borrar, el espia lo da por hecho que si toco en el
    // boton para confirmar
    spyOn(window, 'confirm').and.returnValue(false);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of({}));

    componente.borrarMedico('1');

    // Que no sea llamada la funcion porque el usuario cancelo
    expect(espia).not.toHaveBeenCalledWith('1');
  });


});
