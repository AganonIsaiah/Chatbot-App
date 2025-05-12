package com.example.demo.controller;

import com.example.demo.service.ChatService;
import com.example.demo.dto.ChatRequest;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private final ChatService chatService;
    public ChatController(ChatService chatService) {this.chatService = chatService;}


    @PostMapping("/generate")
    public Map<String, String> generateChat(@Valid @RequestBody ChatRequest chatRequest) {
        String response = chatService.generate(chatRequest.getPrompt());
        Map<String, String> responseBody = new HashMap<>();
        responseBody.put("content", response);
        return responseBody;
    }
}