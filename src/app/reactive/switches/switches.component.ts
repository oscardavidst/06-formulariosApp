import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'M',
    notificaciones: true,
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, terminos: false });
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
      console.log(this.miFormulario.value);

      const formValue = { ...this.miFormulario.value };
      delete formValue.terminos;
      this.persona = formValue as SwitchesComponent['persona'];

      this.miFormulario.reset();
    }
  }
}
