const fs = require('fs');

async function updateJoke() {
  try {
    const quotes = require('./quotes.json');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { quote, author } = quotes[randomIndex];

    const cardDesign = `
<!--STARTS_HERE_JOKE_CARD-->
> **Joke of the Day:**
> _This will be updated daily with a new joke!_
<!--ENDS_HERE_JOKE_CARD-->
`;

    const readmePath = './README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    readmeContent = readmeContent.replace(
      /<!--STARTS_HERE_JOKE_CARD-->(.|\n)*<!--ENDS_HERE_JOKE_CARD-->/,
      cardDesign
    );

    fs.writeFileSync(readmePath, readmeContent);
  } catch (error) {
    console.error('Error updating quote:', error);
  }
}

updateJoke();
