const fs = require('fs');
const path = require('path');

// Path to jokes.json and README.md
const jokesFilePath = path.join(__dirname, 'jokes.json');
const readmeFilePath = path.join(__dirname, 'README.md');

// Function to get a random joke from jokes.json
function getRandomJoke() {
  const jokes = JSON.parse(fs.readFileSync(jokesFilePath, 'utf8'));
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

// Function to update the README.md with the new joke
function updateReadme(joke) {
  const readmeContent = `
## Daily Joke

> **Joke of the Day:**
> _${joke}_
  `;

  // Write the joke to README.md
  fs.writeFileSync(readmeFilePath, readmeContent, 'utf8');
  console.log('README.md updated with the new joke!');
}

// Get a random joke and update README
const joke = getRandomJoke();
updateReadme(joke);
