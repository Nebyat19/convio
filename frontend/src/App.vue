

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