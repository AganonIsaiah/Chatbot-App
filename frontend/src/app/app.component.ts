import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}