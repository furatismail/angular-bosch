import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PhotoService } from '../services/photo.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoIdResolverService implements Resolve<Observable<Array<any>>> {
  private photoService = inject(PhotoService)

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<any>> {
    const photoId = route.paramMap.get('photoId');
    if(photoId) {
      return this.photoService.getImage(photoId)
    }

    return of(null)
  }
}
