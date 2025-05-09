import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponseViewComponent } from "./features/response-view/response-view.component";
import { ChatInputViewComponent } from "./features/chat-input-view/chat-input-view.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResponseViewComponent, ChatInputViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
