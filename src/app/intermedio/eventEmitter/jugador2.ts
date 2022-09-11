// Ejecutar con ng test

import { EventEmitter } from '@angular/core';

export class Jugador2 {

  hp: number; // vidas
  hpCambia = new EventEmitter<number>(); // Emite un evento => un number

  constructor() {
    this.hp = 100;
  }

  recibeDanio(danio: number) {

    if (danio >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danio;
    }

    this.hpCambia.emit(this.hp);
  }

}
