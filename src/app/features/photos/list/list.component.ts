import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  photos: Array<any> = []
  private cd = inject(ChangeDetectorRef)
  private activatedRoute = inject(ActivatedRoute) 

  ngOnInit() {
    console.log(this.activatedRoute)

    this.activatedRoute.data.subscribe((data: any) => {
      setTimeout(() => {
        this.photos = data?.photos
        this.cd.detectChanges()
        console.log('run')
      }, 1000);

    })

  }

}
