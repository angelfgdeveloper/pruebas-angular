import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ RouterTestingModule ], // Añadir module para rutas
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un link a la página de médicos', () => {
    // Obtener el routerLink del html al hacer cambio de página
    //const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    console.warn(elementos);


    let existe = false;

    for (const elem of elementos) {
      if (elem.attributes['routerLink'] === '/medicos') {
        // console.warn(elem.attributes['routerLink']);
        existe = true;
        break;
      }
    }

    expect(existe).toBeTruthy();
  });

});
