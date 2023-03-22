import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  miFormulario = this.formBuilder.group({
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

  guardar() {
    if (this.miFormulario.invalid) {
      return;
    } else {
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
    }
  }
}
