package com.sezzle.fullStackChallenge;

import java.io.IOException;
import java.util.*;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class SocketTextHandler extends TextWebSocketHandler {
	
	private List<WebSocketSession> sessionList = new ArrayList<WebSocketSession>();
	
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessionList.add(session);
        System.out.println("Hello");
    }

	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message)
			throws InterruptedException, IOException {
		 System.out.println("handling message here");
		 try {
			 String payload = message.getPayload();
			 // Broadcast
			 for (WebSocketSession savedSession: sessionList) {
				 savedSession.sendMessage(new TextMessage(payload));
			 }
		 }
		 catch(Exception e) {
			 e.printStackTrace();
		 }
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		sessionList.remove(session);
	}
}
