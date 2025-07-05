import { Copy } from "./Copy";

export class Reader {
  private id: string;
  private name: string;
  private borrowedBooks: Copy[];

  constructor(id: string, name: string, borrowedBooks: Copy[] = []) {
    this.id = id;
    this.name = name;
    this.borrowedBooks = borrowedBooks;
  }

  getId(): string {
    return this.id;
  }

  getBorrowedBooks(): Copy[] {
    return this.borrowedBooks;
  }

  setBorrowedBooks(books: Copy[]): void {
    this.borrowedBooks = books;
  }

  addBorrowedBook(book: Copy): void {
    this.borrowedBooks.push(book);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}
