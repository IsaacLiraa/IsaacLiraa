const fs = require('fs');
const path = require('path');

// Path to jokes file
const jokesFilePath = path.join(__dirname, 'jokes.json');
const readmeFilePath = path.join(__dirname, 'README.md');

// Read jokes from jokes.json
const jokes = JSON.parse(fs.readFileSync(jokesFilePath, 'utf-8'));

// Pick a random joke
const randomJoke = jokes[Math.floor(Math.random() * jokes.length)].joke;  // Access the joke string

// Read the README.md file
let readmeContent = fs.readFileSync(readmeFilePath, 'utf-8');

// Find and replace the placeholder with the random joke
const jokePlaceholder = '<!--STARTS_HERE_QUOTE_CARD-->';
const jokeEndPlaceholder = '<!--ENDS_HERE_QUOTE_CARD-->';

// Format the joke section for README.md
const jokeSection = `${jokePlaceholder}\n### 😁 Daily Joke\n\n> **Joke of the Day:**\n> _${randomJoke}_\n\n${jokeEndPlaceholder}`;

// Replace the content between the placeholders with the new joke section
readmeContent = readmeContent.replace(
  /<!--STARTS_HERE_QUOTE_CARD-->(.|\n)*<!--ENDS_HERE_QUOTE_CARD-->/,
  jokeSection
);

// Write the updated README.md back to the file
fs.writeFileSync(readmeFilePath, readmeContent, 'utf-8');
console.log("README.md updated with a new joke!");
