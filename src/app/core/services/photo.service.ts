import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private httpClient = inject(HttpClient);

  getImages(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>('https://jsonplaceholder.typicode.com/photos');
  }
}
