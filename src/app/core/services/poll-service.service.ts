import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private router: Router, private apiService: ApiService) { }

  createPoll(credentials: any): Observable<any> {
    return this.apiService.post("polls/create", credentials).pipe(
      map((response) => { return response}),
      catchError(error => {
        return error;
      })
    );
  }
}
