// Simulated database of users
const userDatabase = [];

// Array of 40 unisex names
const names = [
  "Alex", "Taylor", "Jordan", "Morgan", "Charlie", "Casey", "Jamie", "Chris",
  "Pat", "Sam", "Riley", "Dakota", "Avery", "Emerson", "Parker", "Reese",
  "Harper", "Skylar", "Rowan", "Sage", "River", "Quinn", "Shawn", "Blake",
  "Elliot", "Cameron", "Jesse", "Logan", "Drew", "Payton", "Leslie", "Kendall",
  "Reagan", "Cory", "Dylan", "Micah", "Adrian", "Shannon", "Sydney", "Finley"
];

/**
 * Checks if a username exists in the database
 * @param {string} username - The username to check
 * @returns {boolean} - True if the username exists, false otherwise
 */
function usernameExists(username) {
  return userDatabase.some(user => user.username === username);
}

/**
 * Generates a unique username by combining a random name and 3 random digits.
 * Ensures the username does not already exist in the database.
 * @returns {string} - A unique username
 */
function generateUniqueUsername() {
  let username;
  do {
    // Pick a random name
    const randomName = names[Math.floor(Math.random() * names.length)];
    // Generate 3 random digits
    const randomDigits = Math.floor(Math.random() * 900) + 100; // 100-999
    username = `${randomName}${randomDigits}`;
  } while (usernameExists(username)); // Ensure the username is unique
  return username;
}

/**
 * Registers a new user with a unique username
 * @param {string} userId - The user's ID or identifier
 * @returns {Object} - The new user object
 */
function registerUser(userId) {
  const username = generateUniqueUsername();
  const newUser = { id: userId, username: username };
  userDatabase.push(newUser); // Simulate storing the user in the database
  return newUser;
}

// Simulating user visits and registrations
console.log("New User Registration:");
const user1 = registerUser("user1");
console.log(user1);

const user2 = registerUser("user2");
console.log(user2);

const user3 = registerUser("user3");
console.log(user3);

console.log("Current User Database:");
console.log(userDatabase);
