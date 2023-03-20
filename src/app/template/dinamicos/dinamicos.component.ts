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
  juegoNuevo: string = '';
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

  agregarJuego() {
    if (!this.juegoNuevo) return;

    const juego: Juego = {
      id: this.persona.juegos.slice(-1)[0].id + 1,
      nombre: this.juegoNuevo,
    };
    this.persona.juegos.push({ ...juego });

    this.juegoNuevo = '';
  }

  removerJuego(index: number) {
    this.persona.juegos.splice(index, 1);
  }
}
