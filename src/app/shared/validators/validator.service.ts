import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public regexNombreApellido: string = '([a-zA-Z ]+) ([a-zA-Z ]+)';
  public regexEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  validacionPersonalizada(control: FormControl): ValidationErrors | null {
    const value = control.value;
    if (value === 'admin' || value === 'administrador') {
      return { validacionPersonalizada: true };
    } else {
      return null;
    }
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const string1 = formGroup.get(campo1)?.value;
      const string2 = formGroup.get(campo2)?.value;
      if (string1 !== string2) {
        formGroup.get(campo2)?.setErrors({ camposDesiguales: true });
        return { camposDesiguales: true };
      } else {
        // Warn: Esto quita otras validaciones que tenga el campo2
        formGroup.get(campo2)?.setErrors(null);
        return null;
      }
    };
  }
}
