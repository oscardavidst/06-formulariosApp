import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    // Se puede retonar el Observable con map()
    return this.httpClient
      .get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        map((resp) => {
          for (let usuario of resp) {
            if (usuario.email === email) return { emailExistente: true };
          }
          return null;
        })
      );

    // // También se puede retornar el Observable con of() que devuelve un objeto dentro de un Observable
    // return this.httpClient.get<any>(`localhost:3000/usuarios?q=${email}`)
    //   ? of({ emailExistente: true })
    //   : of(null);
  }
}
