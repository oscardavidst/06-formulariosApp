import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  regexNombreApellido: string = '([a-zA-Z ]+) ([a-zA-Z ]+)';
  regexEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.regexNombreApellido)],
    ],
    email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  validarCampo(campo: string) {
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
      console.log('Guardado existoso', this.miFormulario.value);
    }
  }
}