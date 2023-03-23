import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  Validators,
} from '@angular/forms';

import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.formBuilder.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.regexNombreApellido),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.regexEmail),
        ],
      ],
      usuario: [
        '',
        [Validators.required, this.validatorService.validacionPersonalizada],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'passwordConfirm'),
      ],
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Oscar David Soto Tellez',
      email: 'oscarqpzm95@gmail.com',
      usuario: 'oscardavidst',
    });
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
