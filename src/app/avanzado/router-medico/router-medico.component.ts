import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: [
  ]
})
export class RouterMedicoComponent implements OnInit {

  id!: string;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // La prueba sera cuando el id venga en "nuevo"
      this.id = params['id']; // El id era nuevo, y actualizacion => sdasf
    });
  }

  guardarMedico() {
    this.router.navigate(['medico', '123']);
  }

}
