import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  juegos: Juego[];
}

interface Juego {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  persona: Persona = {
    nombre: 'Oscar',
    juegos: [
      {
        id: 1,
        nombre: 'Grand Thef Auto VI',
      },
      {
        id: 2,
        nombre: 'Dofus',
      },
    ],
  };

  guardar() {}

  removerJuego(index: number) {
    this.persona.juegos.splice(index, 1);
  }
}
