import { Component } from '@angular/core';
import { StatisticsComponent } from "../statistics/statistics.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [StatisticsComponent, RouterOutlet, RouterLink],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent {
  showStatistics = false
  
  loadStatistics() {
    this.showStatistics = true
  }
}
