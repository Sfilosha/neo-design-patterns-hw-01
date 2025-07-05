import { Copy } from "./Copy";

export class Reader {
  id: string;
  name: string;
  borrowedBooks: Copy[];

  constructor(id: string, name: string, borrowedBooks: Copy[] = []) {
    this.id = id;
    this.name = name;
    this.borrowedBooks = borrowedBooks;
  }
}
