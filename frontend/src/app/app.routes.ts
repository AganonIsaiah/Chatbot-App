import { Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { TradeHistoryComponent } from '../pages/trade-history/trade-history.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'history', component: TradeHistoryComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];
