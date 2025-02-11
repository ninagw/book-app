import Navigation from "@/components/Navigation";
import BookList from "@/components/BookList";
import { useState } from "react";

export default function Wishlist({
    books,
    booksData,
    handleToggleBookmark,
    handleToggleTBR,
    handleToggleAlreadyRead,
    handleToggleCurrentlyReading
}) {
    const [filter, setFilter] = useState("wishlist-books");
    function handleFilter(newFilter) {
      setFilter(newFilter);
    }

    const filteredBooks = books.filter((book) => {
        if (filter === "wishlist-books") {
          return booksData.find(
            (booksData) => booksData.id === book.id && booksData.isBookmarked
          );
        } else if (filter === "to-be-read-books") {
          return booksData.find(
            (booksData) => booksData.id === book.id && booksData.isTBR
          );
        } else if (filter === "currently-reading-books") {
          return booksData.find(
            (booksData) => booksData.id === book.id && booksData.isCurrentlyReading
          );
        } else if (filter === "already-read-books") {
          return booksData.find(
            (booksData) => booksData.id === book.id && booksData.isAlreadyRead
          );
        } else if (filter === "all-bookshelf-books") {
          return booksData.find(
            (booksData) => booksData.id === book.id && (booksData.isTBR || booksData.isCurrentlyReading || booksData.isAlreadyRead)
          );
        }
      });

    return(
        <>
        <header>
        <h1>Wishlist</h1>
      </header>
      <main>
        {filteredBooks?.length > 0 ? (
          <BookList
            books={filteredBooks}
            booksData={booksData}
            handleToggleBookmark={handleToggleBookmark}
            handleToggleTBR={handleToggleTBR}
            handleToggleAlreadyRead={handleToggleAlreadyRead}
            handleToggleCurrentlyReading={handleToggleCurrentlyReading}
            // setAnimationActiveBookmark={setAnimationActiveBookmark}
            // setAnimationActiveAlreadyRead={setAnimationActiveAlreadyRead}
          />
        ) : (
          <p>You have not added any books to your wishlist yet.</p>
        )}
      </main>
      <Navigation></Navigation>
      </>
    )
}