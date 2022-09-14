import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
// import { NavbarComponent } from './avanzado/navbar/navbar.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // NavbarComponent,
      ],
      imports: [
        // Simular rutas
        RouterTestingModule.withRoutes([])
      ],
      schemas: [
        // Ignorar cualquier selector o directiva que no conozcan
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas');
  });

  // Modificación
  it('Debe de tener un router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    // Comprobar que exista el routerOutlet
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    // No debería ser null el router-outlet
    expect(debugElement).not.toBeNull();
  });

  // Ignorada de momento
  // xit('Debe de tener un link a la página de médicos', () => {
  //   const fixture = TestBed.createComponent(AppComponent); // Obtener el componente

  //   // Obtener el routerLink del html al hacer cambio de página
  //   //const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
  //   const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
  //   // console.warn(elementos);

  //   let existe = false;

  //   for (const elem of elementos) {
  //     if (elem.attributes['routerLink'] === '/medicos') {
  //       // console.warn(elem.attributes['routerLink']);
  //       existe = true;
  //       break;
  //     }
  //   }

  //   expect(existe).toBeTruthy();
  // });



});
