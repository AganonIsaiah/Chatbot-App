import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:8080/api/chat/generate';

  constructor(private http: HttpClient) {}

  sendMessage(prompt: string): Observable<ChatMessage> {
    return this.http.post<ChatMessage>(this.apiUrl, { prompt });
  }
}
