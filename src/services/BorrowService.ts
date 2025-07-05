import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isAvailable) {
      console.log("Вільних копій книги немає.");
      return false;
    }

    reader.borrowedBooks.push(copy);
    copy.isAvailable = false;
    console.log(`Читач ${reader.id} взяв книгу ${copy.book.title}`);
    return true;
  }

  returnBook(reader: Reader, copy: Copy): boolean {
    const hasBook = reader.borrowedBooks.some(
      (borrowedCopy) => borrowedCopy === copy
    );
    if (!hasBook) {
      console.log(`Читач ${reader.id} не брав книгу ${copy.book.title}`);
      return false;
    }

    reader.borrowedBooks = reader.borrowedBooks.filter(
      (borrowedCopy) => borrowedCopy !== copy
    );
    copy.isAvailable = true;
    console.log(`Читач ${reader.id} повернув книгу ${copy.book.title}`);
    return true;
  }
}
