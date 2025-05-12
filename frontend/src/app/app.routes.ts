import { Routes } from '@angular/router';
import { ChatContainerComponent } from './features/chat/components/chat-container/chat-container.component';
import { FrenchContainerComponent } from './features/french/components/french-container/french-container.component';
import { TradingContainerComponent } from './features/trading/components/trading-container/trading-container.component';

export const routes: Routes = [
    { path: 'chat', component: ChatContainerComponent },
    { path: 'french', component: FrenchContainerComponent },
    { path: 'trading', component: TradingContainerComponent },

    { path: '', redirectTo: '/chat', pathMatch: 'full' }

];
