import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
@Component({
  selector: 'app-chat-input-view',
  imports: [FormsModule, HttpClientModule],
  standalone: true,
  templateUrl: './chat-input-view.component.html',
  styleUrl: './chat-input-view.component.scss'
})
export class ChatInputViewComponent {
  userInput: string = '';

  constructor(private http: HttpClient) {}
  
  onSubmit() {
    console.log("You:", this.userInput)

    this.http.post('http://localhost:8080/api/chat/generate', { prompt: this.userInput }).subscribe(
      (res: any) => {
        console.log("AI:", res.response);
      }, 
      (err) => {
        console.error("Error:", err);
      }
    )
    this.userInput='';
  }
}
