import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
  url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this.url = url;
  }

  getDescription(): string {
    return `Електронна книга: ${this.getTitle()}, ${this.getYear()}, ${this.getAuthor().getAuthorName()}, ${
      this.url
    }`;
  }
}
