import { Author } from "./Author";

export abstract class AbstractBook {
  title: string;
  year: number;
  author: Author;

  constructor(title: string, year: number, author: Author) {
    this.title = title;
    this.year = year;
    this.author = author;
  }
}
