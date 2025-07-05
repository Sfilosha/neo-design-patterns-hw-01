import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class Book extends AbstractBook {
  constructor(title: string, year: number, author: Author) {
    super(title, year, author);
  }

  getDescription(): string {
    return `Фізична книга: ${this.title}, ${this.year}, ${this.author.name}`;
  }
}
