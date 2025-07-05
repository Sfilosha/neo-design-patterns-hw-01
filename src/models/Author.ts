export class Author {
  // TODO
  name: string;
  books: string[];

  constructor(name: string, books: string[] = []) {
    this.name = name;
    this.books = books;
  }
}
