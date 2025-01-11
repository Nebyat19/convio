

<template>
    <div>
        <h1>This is landing page</h1>   
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
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { io } from "socket.io-client";
</script>