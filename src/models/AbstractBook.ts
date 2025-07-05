import { Author } from "./Author";

export abstract class AbstractBook {
  private title: string;
  private year: number;
  private author: Author;

  constructor(title: string, year: number, author: Author) {
    this.title = title;
    this.year = year;
    this.author = author;
    author.addBook(this);
  }

  getTitle(): string {
    return this.title;
  }

  getYear(): number {
    return this.year;
  }

  getAuthor(): Author {
    return this.author;
  }

  abstract getDescription(): string;
}
