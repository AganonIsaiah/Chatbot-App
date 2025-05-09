package com.example.demo.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;


/**
 *
 * curl -X POST http://localhost:8080/api/chat/generate \
 * -H "Content-Type: application/json" \
 * -d '
 */
@Service
public class ChatService {
    private final ChatClient chatClient;

    public ChatService(ChatClient.Builder chatClient) {this.chatClient = chatClient.build();}

    public String generate(String prompt) {
        String custom = """
                 Respond concise and correct.
                 Respond with at most two sentences unless specified otherwise.
                 Optimize each response so its not redundant and as short as possible (without losing valuable information).
                 Here is the prompt: %s""".formatted(prompt);

        return chatClient.prompt()
                .user(custom)
                .call()
                .content();
    }
}