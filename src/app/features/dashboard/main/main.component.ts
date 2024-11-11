import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  decision = true;
  weight = 260;
  tv = 'ct1';

  members = [
    {
      id: 'uuid1',
      name: 'Karel',
      dateOfBirth: '01.01.1990'
    },
    {
      id: 'uuid2',
      name: 'Petr',
      dateOfBirth: '01.01.1991'
    }
  ]

  trackByMemberId(index: number, member: any) {
    return member.id
  }
}

