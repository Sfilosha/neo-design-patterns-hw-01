import { AbstractBook } from "./AbstractBook";

export class Copy {
  book: AbstractBook;
  isAvailable: boolean;

  constructor(book: AbstractBook, isAvailable: boolean = true) {
    this.book = book;
    this.isAvailable = isAvailable;
  }

  isCopyAvailable(): boolean {
    if (!this.isAvailable) {
      console.log(`❌ Книги немає в наявності`);
      return false;
    } else {
      console.log(`✅ Книга в наявності`);
      return true;
    }
  }
}
