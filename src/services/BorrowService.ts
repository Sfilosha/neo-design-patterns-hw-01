import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) {
      console.log("Вільних копій книги немає.");
      return false;
    }

    reader.addBorrowedBook(copy);
    copy.setAvailability(false);
    console.log(
      `Читач ${reader.getName()} взяв книгу ${copy.getBook().getTitle()}`
    );
    return true;
  }

  returnBook(reader: Reader, copy: Copy): boolean {
    const hasBook = reader
      .getBorrowedBooks()
      .some((borrowedCopy) => borrowedCopy === copy);
    if (!hasBook) {
      console.log(
        `Читач ${reader.getName()} не брав книгу ${copy.getBook().getTitle()}`
      );
      return false;
    }
    const newList = reader
      .getBorrowedBooks()
      .filter((borrowedCopy) => borrowedCopy !== copy);

    reader.setBorrowedBooks(newList);

    copy.setAvailability(true);
    console.log(
      `Читач ${reader.getName()} повернув книгу ${copy.getBook().getTitle()}`
    );
    return true;
  }
}
