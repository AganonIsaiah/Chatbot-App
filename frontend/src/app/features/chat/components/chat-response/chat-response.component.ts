import { Component, Input } from '@angular/core';
import { ChatMessage } from '../../models/chat-message.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chat-response',
  imports: [NgFor],
  templateUrl: './chat-response.component.html',
  styleUrl: './chat-response.component.scss'
})
export class ChatResponseComponent {
  @Input() messages: ChatMessage[] = [];
}
