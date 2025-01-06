import Navigation from "@/components/Navigation";
import BookList from "@/components/BookList";
import { useState } from "react";

export default function Bookshelf({
    books,
    booksData,
    handleToggleBookmark,
    handleToggleAlreadyRead
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
        } else if (filter === "already-read-books") {
          return booksData.find(
            (booksData) => booksData.id === book.id && booksData.isAlreadyRead
          );
        } 
        // else if (filter === "currently-reading-books") {
        //   return booksData.find(
        //     (booksData) => booksData.id === book.id && booksData.isCurrentlyReading
        //   );
        // }
      });

    return(
        <>
        <header>
        <h1>My Bookshelf</h1>
      </header>
      <main>
        <button
            type="button"
            aria-label="shows list of books on your wishlist"
            onClick={() => {
              handleFilter("wishlist-books");
            }}
            $isActive={filter === "wishlist-books" ? true : false}
          >
            My wishlist
        </button>
        <button
            type="button"
            aria-label="shows list of books you already read"
            onClick={() => {
              handleFilter("already-read-books");
            }}
            $isActive={filter === "already-read-books" ? true : false}
          >
            Books already read
        </button>
        {filteredBooks?.length > 0 ? (
          <BookList
            books={filteredBooks}
            booksData={booksData}
            handleToggleBookmark={handleToggleBookmark}
            handleToggleAlreadyRead={handleToggleAlreadyRead}
            // handleToggleCurrentlyReading={handleToggleCurrentlyReading}
            // setAnimationActiveBookmark={setAnimationActiveBookmark}
            // setAnimationActiveAlreadyRead={setAnimationActiveAlreadyRead}
          />
        ) : (
          <p>You have not added any books yet.</p>
        )}
      </main>
      <Navigation></Navigation>
        </>
    )
}