/**
 * Minimal utility class for generating Lorem Ipsum random / pseudo-random text.
 */
export default class SolidFaker {
  /**
   * Constructor for SolidFaker class.
   * @param {number} seedValue - Seed value for consistent randomness (optional).
   */
  constructor(seedValue) {
    /**
     * Seed value for consistent randomness.
     * @type {number|undefined}
     */
    this.seedValue = seedValue;
    /**
     * Array containing Lorem Ipsum words.
     * @type {string[]}
     */
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

  /**
   * Set a seed value for consistent randomness on each invocation.
   * @param {number} seed - Seed value for consistent randomness.
   */
  seed(seed) {
    this.seedValue = seed !== undefined ? seed : Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }

  /**
   * Generate a random index for selecting a word from loremIpsumWords array.
   * @returns {number} - Random index.
   */
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

  /**
   * Generate a random number of words.
   * @param {number} numWords - Number of words to generate.
   * @param {number} [capitalizeType=0] - Capitalization type:
   *   0 - all lowercase, 1 - capitalize first word, 2 - capitalize all words.
   * @returns {string} - Random words joined together.
   */
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

  /**
   * Generate a random number of sentences.
   * @param {number} numSentences - Number of sentences to generate.
   * @returns {string} - Random sentences joined together.
   */
  sentences(numSentences) {
    const result = [];
    for (let i = 0; i < numSentences; i++) {
      const numWords = Math.floor(Math.random() * 10) + 5; // Random number of words per sentence (5 to 14)
      const sentence = this.words(numWords, 1); // Capitalize first word
      result.push(sentence);
    }
    return result.join('. ');
  }

  /**
   * Generate a random number of paragraphs.
   * @param {number} numParagraphs - Number of paragraphs to generate.
   * @returns {string} - Random paragraphs joined together.
   */
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
