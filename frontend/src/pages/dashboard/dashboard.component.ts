import { Component } from '@angular/core';
import { ChartComponent } from '../../components/chart/chart.component';
import { HoldingsComponent } from '../../components/holdings/holdings.component';
import { WatchlistComponent } from '../../components/watchlist/watchlist.component';

@Component({
  selector: 'app-dashboard',
  imports: [ChartComponent, HoldingsComponent, WatchlistComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
