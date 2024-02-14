// Minimal utility for generating Lorem Ipsum random / pseudo-random text
export default class SolidFaker {
  constructor(seedValue) {
    this.seedValue = seedValue;
    this.loremIpsumWords = [
      'lorem',
      'ipsum',
      'dolor',
      'sit',
      'amet',
      'consectetur',
      'adipiscing',
      'elit',
      'sed',
      'do',
      'eiusmod',
      'tempor',
      'incididunt',
      'ut',
      'labore',
      'et',
      'dolore',
      'magna',
      'aliqua',
      'ut',
      'enim',
      'ad',
      'minim',
      'veniam',
      'quis',
      'nostrud',
      'exercitation',
      'ullamco',
      'laboris',
      'nisi',
      'ut',
      'aliquip',
      'ex',
      'ea',
      'commodo',
      'consequat',
      'duis',
      'aute',
      'irure',
      'dolor',
      'in',
      'reprehenderit',
      'in',
      'voluptate',
      'velit',
      'esse',
      'cillum',
      'dolore',
      'eu',
      'fugiat',
      'nulla',
      'pariatur',
      'excepteur',
      'sint',
      'occaecat',
      'cupidatat',
      'non',
      'proident',
      'sunt',
      'in',
      'culpa',
      'qui',
      'officia',
      'deserunt',
      'mollit',
      'anim',
      'id',
      'est',
      'laborum'
    ];
  }

  // Set a seed value for consistent randomness on each invocation
  seed(seed) {
    this.seedValue = seed !== undefined ? seed : Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }

  getRandomIndex() {
    if (this.seedValue !== undefined) {
      // If a seed value is defined, use it for consistent randomness
      // Generate a random index using a mathematical function based on the seed value
      // Math.abs() is used to ensure a positive value
      // Math.sin() generates a sine value between -1 and 1 based on the seed value
      // Multiply by 10000 to scale the value for better distribution
      // Use modulo to ensure the index stays within the range of the loremIpsumWords array length
      return Math.floor(Math.abs(Math.sin(this.seedValue++) * 10000) % this.loremIpsumWords.length);
    }

    // If no seed value is defined, generate a random index normally
    // Generate a random index between 0 and the length of the loremIpsumWords array
    return Math.floor(Math.random() * this.loremIpsumWords.length);
  }

  // Generate a random number of words
  // "capitalizeType" is 0 by default (all lowercase) and accepts 1 (capitalize first word) or 2 (capitalize all words)
  words(numWords, capitalizeType = 0) {
    const result = [];
    for (let i = 0; i < numWords; i++) {
      const randomIndex = this.getRandomIndex();
      let word = this.loremIpsumWords[randomIndex];
      if ((capitalizeType === 1 && i === 0) || capitalizeType === 2) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
      result.push(word);
    }
    return result.join(' ');
  }

  // Generate a random number of sentences
  sentences(numSentences) {
    const result = [];
    for (let i = 0; i < numSentences; i++) {
      const numWords = Math.floor(Math.random() * 10) + 5; // Random number of words per sentence (5 to 14)
      const sentence = this.words(numWords, 1); // Capitalize first word
      result.push(sentence);
    }
    return result.join('. ');
  }

  // Generate a random number of paragraphs
  paragraphs(numParagraphs) {
    const result = [];
    for (let i = 0; i < numParagraphs; i++) {
      const numSentences = Math.floor(Math.random() * 5) + 3; // Random number of sentences per paragraph (3 to 7)
      let paragraph = this.sentences(numSentences);
      paragraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1); // Capitalize first letter
      result.push(paragraph);
    }
    return result.join('\n\n');
  }
}

// export singleton instance for quick consistent testing
export const solidFaker = new SolidFaker(123);
