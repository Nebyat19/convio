
import names from './constants/names.json';

const names = names.names;
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

export default generateUniqueUsername;
