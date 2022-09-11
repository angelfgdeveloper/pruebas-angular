// Ejecutar con ng test

import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';

describe('Formularios', () => {

  let componente: FormularioRegister;

  beforeEach(() => {
    // Agregando la inyeccion de dependencias que pide el contructor de la clase
    componente = new FormularioRegister(new FormBuilder());
  });

  it('Debe de crear un formulario con dos campos, email y password', () => {
    // Contiene ese campo en el formulario
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('El email debe de ser obligatorio', () => {
    const control = componente.form.get('email'); // Obtengo la referencia de esa variable
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('El email debe de ser un correo válido', () => {
    const control = componente.form.get('email'); // Obtengo la referencia de esa variable
    control?.setValue('angel@gmail.com');
    expect(control?.valid).toBeTruthy(); // Verifica que sea valido el correo
  });

});
