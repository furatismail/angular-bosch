import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from '../services/photo.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoResolverService implements Resolve<Observable<Array<any>>> {
  private photoService = inject(PhotoService)

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<any>> {
    return this.photoService.getImages()
  }
}
