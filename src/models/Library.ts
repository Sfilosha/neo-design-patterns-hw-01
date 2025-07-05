import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";
import { Book } from "./Book";
import { EBook } from "./EBook";

export class Library {
  private books: AbstractBook[] = [];
  private authors: Author[] = [];
  private copies: Copy[] = [];
  private readers: Reader[] = [];

  addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  addAuthor(author: Author): void {
    this.authors.push(author);
  }
  addCopy(copy: Copy): void {
    this.copies.push(copy);
  }
  addReader(reader: Reader): void {
    this.readers.push(reader);
  }
  getAvailableCopies(): Copy[] {
    return this.copies.filter((copy) => copy.isAvailable);
  }
  findBookByAuthor(author: string): AbstractBook[] {
    return this.books.filter((book) => book.author.name == author);
  }
}
