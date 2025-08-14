export class FigmaBase {
  constructor(dictionary) {
    if (!dictionary) throw new Error('Dictionary not provided');

    this.dictionary = dictionary;
    this.variables = dictionary.variables;
    this.collections = dictionary.variableCollections;
  }

  getCollectionById(id) {
    return Object.values(this.collections).find(c => c.id === id);
  }
}
