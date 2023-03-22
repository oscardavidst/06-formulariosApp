import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    juegos: this.formBuilder.array([['Grand Thef Auto VI'], ['Dofus']]),
  });

  nuevoJuego: FormControl = this.formBuilder.control('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  get juegosArr() {
    return this.miFormulario.get('juegos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  validarCampo(campo: FormControl) {
    return !(campo.errors && campo.touched);
  }

  validarCampoFormulario(campo: string) {
    return !(
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    } else {
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
    }
  }

  agregarJuego() {
    if (this.nuevoJuego.invalid) {
      return;
    } else {
      // this.juegosArr.push(
      //   new FormControl(this.nuevoJuego.value, Validators.required)
      // );
      this.juegosArr.push(
        this.formBuilder.control(this.nuevoJuego.value, Validators.required)
      );
      this.nuevoJuego.reset();
    }
  }
}
