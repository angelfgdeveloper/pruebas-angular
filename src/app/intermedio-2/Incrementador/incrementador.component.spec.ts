import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { IncrementadorComponent } from './incrementador.component';

// Pruebas de integración
describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

      component.leyenda = 'Progreso de carga';

      fixture.detectChanges(); // disparar la detección de cambios

      // Obtener el elemento del HTML por medio del fixture
      const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

      // Evaluar contenido interno
      expect(elem.innerHTML).toContain('Progreso de carga');
    });

    it('Debe de mostrar en el input el valor del progreso', (done) => {

      component.cambiarValor(5);

      fixture.detectChanges(); // Deteccion de cambios de angular

      fixture.whenStable().then(() => {
        const input = fixture.debugElement.query(By.css('input')).nativeElement;

        expect(input.value).toBe('55');
        done();
      });

    });

    it('Debe de incrementar/decrementar en 5, con un click en el botón', () => {

      const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
      //console.log(botones);

      // Hacer un click (Decrementa)
      botones[0].triggerEventHandler('click', null);
      expect(component.progreso).toBe(45); // Es para comprobar si al dar click decrementa en 5 el 55 => 45

      // Hacer un click (Incrementa)
      botones[1].triggerEventHandler('click', null);
      expect(component.progreso).toBe(50); // Es para comprobar si al dar click incrementa en 5 el 45 => 50

    });

    it('En el titulo del componente, debe de mostrar el progreso', () => {
      const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
      botones[0].triggerEventHandler('click', null);

      fixture.detectChanges();

      // Obtener el elemento del HTML por medio del fixture
      const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

      // Evaluar contenido interno
      expect(elem.innerHTML).toContain('45');
    });

});
