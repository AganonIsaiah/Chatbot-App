import { Component } from '@angular/core';
import { ChatMessage } from '../../models/chat-message.model';
import { ChatService } from '../../services/chat.service';
import { ChatInputComponent } from '../chat-input/chat-input.component';
import { ChatResponseComponent } from '../chat-response/chat-response.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-container',
  imports: [CommonModule, ChatResponseComponent, ChatInputComponent],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.scss'
})
export class ChatContainerComponent {
  messages: ChatMessage[] = [];

  
  testView() {
    this.messages.push({ sender: 'user', content: "Message 1"})
    this.messages.push({ sender: 'ai', content: "Message 2"})
    this.messages.push({ sender: 'user', content: "Message 3"})
    this.messages.push({ sender: 'ai', content: "Message 4"})
  }

  constructor(private chatService: ChatService) { 
    this.testView()
  }

  handleMessage(userMsg: string) {
    if (userMsg.trim().toLowerCase() === 'clear') {
      this.messages.length = 0;
    } else {
      this.messages.push({ sender: 'user', content: userMsg });
      console.log("you:", userMsg)

      this.chatService.sendMessage(userMsg).subscribe({
        next: (aiResponse) => {
          this.messages.push({ sender: 'ai', content: aiResponse.content });
          console.log("ai:", aiResponse.content)
        },
        error: (err) => console.error('Chat error:', err)
      });
    }
  }
}
