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
     * Seed value for consistent randomness.
     * @type {number|undefined}
     */
    seedValue: number | undefined;
    /**
     * Array containing Lorem Ipsum words.
     * @type {string[]}
     */
    loremIpsumWords: string[];
    /**
     * Set a seed value for consistent randomness on each invocation.
     * @param {number} seed - Seed value for consistent randomness.
     */
    seed(seed: number): void;
    /**
     * Generate a random index for selecting a word from loremIpsumWords array.
     * @returns {number} - Random index.
     */
    getRandomIndex(): number;
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
     * @param {number} numSentences - Number of sentences to generate.
     * @returns {string} - Random sentences joined together.
     */
    sentences(numSentences: number): string;
    /**
     * Generate a random number of paragraphs.
     * @param {number} numParagraphs - Number of paragraphs to generate.
     * @returns {string} - Random paragraphs joined together.
     */
    paragraphs(numParagraphs: number): string;
}
