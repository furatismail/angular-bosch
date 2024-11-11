import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient = inject(HttpClient);

  getUsers() : Observable<Array<any>> {
    return this.httpClient.get<Array<any>>('https://63bd718118bc301c0267e1e0.mockapi.io/api/users')
  }
}
