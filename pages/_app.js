import GlobalStyle from "../styles";
import books from "../lib/books.json";
import useLocalStorageState from "use-local-storage-state";
// import { useState } from "react";

const initialBooksData = books.map((book) => {
  return { id: book.id };
  // return { id: book.id, isBookmarked: false, isAlreadyRead: false };
});

console.log(initialBooksData); // gibt book ids aus, funktioniert!

export default function App({ Component, pageProps }) {
  // const [booksData, setBooksData] = useLocalStorageState("books-data", {
  //   defaultValue: initialBooksData,
  // });

  // const [animationActiveBookmark, setAnimationActiveBookmark] = useState(false);
  // const [animationActiveAlreadyRead, setAnimationActiveAlreadyRead] =
  //   useState(false);

  // function handleToggleBookmark(id) {
  //   const currentBook = booksInfo.find((book) => book.id === id);
  //   if (currentBook) {
  //     setBooksInfo(
  //       booksInfo.map((bookInfo) =>
  //         bookInfo.id === id
  //           ? { ...bookInfo, isBookmarked: !bookInfo.isBookmarked }
  //           : bookInfo
  //       )
  //     );
  //   } else {
  //     setBooksInfo([...booksInfo, { id, isBookmarked: true }]);
  //   }
  // }

  // function handleToggleAlreadyRead(id) {
  //   const currentBook = booksInfo.find((book) => book.id === id);
  //   if (currentBook) {
  //     setBooksInfo(
  //       booksInfo.map((bookInfo) =>
  //         bookInfo.id === id
  //           ? { ...bookInfo, isAlreadyRead: !bookInfo.isAlreadyRead }
  //           : bookInfo
  //       )
  //     );
  //   } else {
  //     setBooksInfo([...booksInfo, { id, isAlreadyRead: true }]);
  //   }
  // }

  // function handleToggleCurrentlyReading(id) {
  //   const currentBook = booksInfo.find((book) => book.id === id);
  //   if (currentBook) {
  //     setBooksInfo(
  //       booksInfo.map((bookInfo) =>
  //         bookInfo.id === id
  //           ? { ...bookInfo, isCurrentlyReading: !bookInfo.isCurrentlyReading }
  //           : bookInfo
  //       )
  //     );
  //   } else {
  //     setBooksInfo([...booksInfo, { id, isCurrentlyReading: true }]);
  //   }
  // }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} books={books} 
        // booksData={booksData}
        // handleToggleBookmark={handleToggleBookmark}
        // handleToggleAlreadyRead={handleToggleAlreadyRead}
        // handleToggleCurrentlyReading={handleToggleCurrentlyReading}
        // animationActiveAlreadyRead={animationActiveAlreadyRead}
        // animationActiveBookmark={animationActiveBookmark}
        // setAnimationActiveAlreadyRead={setAnimationActiveAlreadyRead}
        // setAnimationActiveBookmark={setAnimationActiveBookmark}
        />
    </>
  );
}
