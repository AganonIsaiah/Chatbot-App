import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatContainerComponent } from './features/chat/components/chat-container/chat-container.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatContainerComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
