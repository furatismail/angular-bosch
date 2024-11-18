import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  members = [
    {
      id: "uuid1",
      name: 'Petr'
    },
    {
      id: "uuid2",
      name: 'Karel'
    }
  ]

  trackByMemberId(index: number, member: any) {
    return member.id
  }
}
