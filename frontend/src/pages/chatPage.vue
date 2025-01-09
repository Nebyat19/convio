<template>
    <div class="chat-room">
      <h1>Realtime Chat Room</h1>
      <div class="messages">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <strong>{{ message.user }}:</strong> {{ message.text }}
        </div>
      </div>
      <form @submit.prevent="sendMessage">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Type a message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { io } from "socket.io-client";
  
  // Connect to Socket.io server
  const socket = io("http://localhost:3000");
  
  const messages = ref([]);
  const newMessage = ref("");
  const userName = `User${Math.floor(Math.random() * 1000)}`;
  
  // Fetch previous messages when component mounts
  const loadMessages = (newMessages) => {
    messages.value = newMessages;
  };
  
  // Send a new message
  const sendMessage = () => {
    if (newMessage.value.trim() !== "") {
      const message = { user: userName, text: newMessage.value.trim() };
      socket.emit("sendMessage", message);
      newMessage.value = "";
    }
  };
  
  // Listen for new messages from the server
  socket.on("newMessage", (message) => {
    messages.value.push(message);
  });
  
  // Load messages when the component is mounted
  onMounted(() => {
    socket.on("loadMessages", loadMessages);
  });
  </script>
  
  <style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    background-color: #f4f4f4;
  }
  
  .chat-room {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .messages {
    margin-bottom: 20px;
    max-height: 300px;
    overflow-y: auto;
  }
  
  .message {
    text-align: left;
    margin: 10px 0;
  }
  
  form {
    display: flex;
    justify-content: center;
  }
  
  input {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  