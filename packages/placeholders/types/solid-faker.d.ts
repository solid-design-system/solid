/**
 * Minimal utility class for generating Lorem Ipsum random / pseudo-random text.
 */
export default class SolidFaker {
  /**
   * Constructor for SolidFaker class.
   * @param {number} seedValue - Seed value for consistent randomness (optional).
   */
  constructor(seedValue: number);
  /**
   * Array containing Lorem Ipsum words.
   * @type {string[]}
   */
  loremIpsumWords: string[];
  /**
   * Seed value for consistent randomness.
   * @type {number|undefined}
   */
  seedValue: number | undefined;
  /**
   * Generate a random index for selecting a word from loremIpsumWords array.
   * @returns {number} - Random index.
   */
  getRandomIndex(): number;
  /**
   * Generates a random integer between the specified minimum and maximum values.
   *
   * @param {number} min - The minimum value of the range (inclusive).
   * @param {number} max - The maximum value of the range (inclusive).
   * @returns {number} The randomly generated integer.
   */
  getRandomInt(min: number, max: number): number;
  /**
   * Generate a random number of words.
   * @param {number} numWords - Number of words to generate.
   * @param {number} [capitalizeType=0] - Capitalization type:
   *   0 - all lowercase, 1 - capitalize first word, 2 - capitalize all words.
   * @returns {string} - Random words joined together.
   */
  words(numWords: number, capitalizeType?: number): string;
  /**
   * Generate a random number of sentences.
   * @param {number} sentencesCount - Number of sentences to generate.
   * @returns {string} - Random sentences joined together.
   */
  sentences(sentencesCount: number): string;
  /**
   * Generate a random number of paragraphs.
   * @param {number} paragraphsCount - Number of paragraphs to generate.
   * @returns {string} - Random paragraphs joined together.
   */
  paragraphs(paragraphsCount: number): string;
}
