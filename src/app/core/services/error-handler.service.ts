import { Injectable } from '@angular/core';
import { Errors } from '../models/errors.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  public formatGenericErrors(error) {
    return throwError(error);
  }
}
