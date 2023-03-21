import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4090ti'),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(0),
  // });

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['RTX 4090ti'],
    precio: [0],
    existencias: [0],
  });

  constructor(private formBuilder: FormBuilder) {}
}
