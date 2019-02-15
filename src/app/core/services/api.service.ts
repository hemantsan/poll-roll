import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { environment as env } from '@env/environment';
import { ServerResponse } from '../models/server-response.model';
import { Errors } from '../models/errors.model';
import { ToastNotificationService } from '@app/shared/services';

const API_ENDPOINT = env.API_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json')};

  constructor(
    private httpClient: HttpClient,
    private errorHandler: ErrorHandlerService,
    private toast: ToastNotificationService
  ) { }

  public get(path: string, params: HttpParams = new HttpParams()) {
    return this.httpClient
      .get(API_ENDPOINT + path, { params })
      .pipe(map(response => { return this.handleResponse(response); }))
      .pipe(catchError(this.formatErrors)
    );
  }

  public put(path: string, body: object = {}) {
    return this.httpClient.put(
      API_ENDPOINT + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}) {
    return this.httpClient
      .post(API_ENDPOINT + path, JSON.stringify(body), this.options)
      .pipe(map(response => { return this.handleResponse(response); }))
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string) {
    return this.httpClient.delete(API_ENDPOINT + path).pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): any {
    return throwError(error);
  }

  public handleResponse(response): ServerResponse {
    const data = response;
    this.toast.showToast(data);

    if (data.error) {
      const error: any = {error: data.error, message: data.message};
      throw new Error(error);
    }
    else {
      return data;
    }
  }
}
