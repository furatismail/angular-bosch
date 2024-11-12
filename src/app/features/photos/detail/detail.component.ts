import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  private activatedRoute = inject(ActivatedRoute) 
  photo: any

  ngOnInit() {

    this.activatedRoute.data.subscribe((data: any) => {
      this.photo = data?.photo
    })
    
  }

}
