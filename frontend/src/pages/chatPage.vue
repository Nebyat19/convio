<template>
    <div id="app" class="chat-room">
      <h1>Realtime Chat Room</h1>
      <div class="messages">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <strong>{{ message.user }}:</strong> {{ message.text }}
        </div>
      </div>
      <form @submit.prevent="sendMessageHandler">
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