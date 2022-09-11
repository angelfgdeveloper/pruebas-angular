import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MedicoService } from './medico.service';

import { MedicoComponent } from './medico.component';

// Ejecutar con ng test

// Configuracion básica para pruebas de integración
describe('Medico Component', () => {

  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    // Es parecido a un modulo NgModule
    // Al hacer inyeccion de dependencias debemos agregarlas tambien al TestBed
    TestBed.configureTestingModule({
      declarations: [ MedicoComponent ],
      providers: [ MedicoService ],
      imports: [ HttpClientModule ],
    });

    fixture = TestBed.createComponent(MedicoComponent); // Realizar queries o selectores en el DOM
    component = fixture.componentInstance; // Acceso al componente
  });

  it('Debe de crearse correctamente el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornar el nombre del médico', () => {
    const nombre = 'Angel';
    // Usar los metodos gracias al TestBed
    const res = component.saludarMedico(nombre);

    expect(res).toContain(nombre);
  });

});
