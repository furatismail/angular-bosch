import { Component, inject, OnInit } from '@angular/core';
import { PhotoService } from '../../../core/services/photo.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  private photoService = inject(PhotoService)
  
  async ngOnInit() {
    try {
      const response = await lastValueFrom(this.photoService.getImages())
      console.log(response)
    } catch (error) {
      console.log(error)
    }
   
  }

}
