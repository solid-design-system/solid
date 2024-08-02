import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import SolidFaker from './solid-faker.js';

describe('SolidFaker', () => {
  describe('words', () => {
    it('should return the same words', () => {
      const seedValue = 123;
      const solidFaker1 = new SolidFaker(seedValue);
      const solidFaker2 = new SolidFaker(seedValue);
      const solidFaker3 = new SolidFaker(seedValue);
      const word1 = solidFaker1.words(5);
      const word2 = solidFaker2.words(5);
      const word3 = solidFaker3.words(5);
      assert.strictEqual(word1, word2);
      assert.strictEqual(word2, word3);
    });
    it('should return different words', () => {
      const solidFaker = new SolidFaker();
      const word1 = solidFaker.words(5);
      const word2 = solidFaker.words(5);
      const word3 = solidFaker.words(5);
      assert.notStrictEqual(word1, word2);
      assert.notStrictEqual(word2, word3);
      assert.notStrictEqual(word3, word1);
    });
  });
  describe('sentence', () => {
    it('should return the same sentences', () => {
      const seedValue = 123;
      const solidFaker1 = new SolidFaker(seedValue);
      const solidFaker2 = new SolidFaker(seedValue);
      const solidFaker3 = new SolidFaker(seedValue);
      const sentence1 = solidFaker1.sentences(2);
      const sentence2 = solidFaker2.sentences(2);
      const sentence3 = solidFaker3.sentences(2);
      assert.strictEqual(sentence1, sentence2);
      assert.strictEqual(sentence2, sentence3);
    });
    it('should return different sentences', () => {
      const solidFaker = new SolidFaker();
      const sentence1 = solidFaker.sentences(2);
      const sentence2 = solidFaker.sentences(2);
      const sentence3 = solidFaker.sentences(2);
      assert.notStrictEqual(sentence1, sentence2);
      assert.notStrictEqual(sentence2, sentence3);
      assert.notStrictEqual(sentence3, sentence1);
    });
  });
  describe('paragraphs', () => {
    it('should return the same paragraphs', () => {
      const seedValue = 123;
      const solidFaker1 = new SolidFaker(seedValue);
      const solidFaker2 = new SolidFaker(seedValue);
      const solidFaker3 = new SolidFaker(seedValue);
      const paragraph1 = solidFaker1.paragraphs(3);
      const paragraph2 = solidFaker2.paragraphs(3);
      const paragraph3 = solidFaker3.paragraphs(3);
      assert.strictEqual(paragraph1, paragraph2);
      assert.strictEqual(paragraph2, paragraph3);
    });
    it('should return different paragraphs', () => {
      const solidFaker = new SolidFaker();
      const paragraph1 = solidFaker.paragraphs(3);
      const paragraph2 = solidFaker.paragraphs(3);
      const paragraph3 = solidFaker.paragraphs(3);
      assert.notStrictEqual(paragraph1, paragraph2);
      assert.notStrictEqual(paragraph2, paragraph3);
      assert.notStrictEqual(paragraph3, paragraph1);
    });
  });
});
