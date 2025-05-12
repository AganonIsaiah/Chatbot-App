import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  imports: [FormsModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss'
})
export class ChatInputComponent {
  userInput = '';
  @Output() messageSent = new EventEmitter<string>();

  onSubmit() {
    if (this.userInput.trim()) {
      this.messageSent.emit(this.userInput);
      this.userInput = '';
    }
  }
}
