import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment as env } from '@env/environment';

const API_ENDPOINT = env.API_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json')};

  constructor(
    private httpClient: HttpClient
  ) { }

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(API_ENDPOINT + path, { params })
      .pipe(
        catchError (this.formatErrors)
      );
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.httpClient.put(
      API_ENDPOINT + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(API_ENDPOINT + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.httpClient.delete(API_ENDPOINT + path).pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }
}
