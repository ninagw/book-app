import Navigation from "@/components/Navigation";
import BookList from "@/components/BookList";
import styled from "styled-components";
import { useState } from "react";

const StyledFilterButton = styled.button`
  border-style: none;
  border-radius: 4px;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.19);
  font-size: 16px;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--text-color)" : "var(--background-color)"};
  color: ${({ $isActive }) =>
    $isActive ? "var(--background-color)" : "var(--text-color)"};
  padding: 4px;
`;

const StyledButtonWrapper = styled.section`
  display: flex;
  gap: 5px;
  padding: 8px;
`;

export default function Bookshelf({
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
        }
      });

    return(
        <>
        <header>
        <h1>My Bookshelf</h1>
      </header>
      <main>
          <StyledButtonWrapper>
            <StyledFilterButton
                type="button"
                aria-label="shows list of books on your wishlist"
                onClick={() => {
                  handleFilter("wishlist-books");
                }}
                $isActive={filter === "wishlist-books" ? true : false}
              >
                My wishlist
            </StyledFilterButton>
            <StyledFilterButton
                type="button"
                aria-label="shows list of books on your TBR"
                onClick={() => {
                  handleFilter("to-be-read-books");
                }}
                $isActive={filter === "to-be-read-books" ? true : false}
              >
                My TBR
            </StyledFilterButton>
            <StyledFilterButton
                type="button"
                aria-label="shows list of books you are currently reading"
                onClick={() => {
                  handleFilter("currently-reading-books");
                }}
                $isActive={filter === "currently-reading-books" ? true : false}
              >
                Books currently reading
            </StyledFilterButton>
            <StyledFilterButton
                type="button"
                aria-label="shows list of books you already read"
                onClick={() => {
                  handleFilter("already-read-books");
                }}
                $isActive={filter === "already-read-books" ? true : false}
              >
                Books already read
            </StyledFilterButton>
          </StyledButtonWrapper>
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
          <p>You have not added any books yet.</p>
        )}
      </main>
      <Navigation></Navigation>
      </>
    )
}