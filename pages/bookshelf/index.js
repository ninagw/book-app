import Navigation from "@/components/Navigation";
import BookList from "@/components/BookList";
import Header from "@/components/Header";
import styled from "styled-components";
import { useState } from "react";

const StyledFilterButton = styled.button`
  border-style: none;
  border-top: 1px solid var(--text-color);
  border-bottom: 1px solid var(--text-color);
  display: flex;
  aligm-items: center;
  justify-content: center;
  // box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.19);
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--text-color)" : "var(--background-color)"};
  color: ${({ $isActive }) =>
    $isActive ? "var(--background-color)" : "var(--text-color)"};
  padding: 4px;
  font-size: var(--font-size-copy);
`;

const StyledButtonWrapper = styled.section`
  display: flex;
  padding: 8px;
`;

export default function Bookshelf({
    books,
    booksData,
    handleToggleTBR,
    handleToggleAlreadyRead,
    handleToggleCurrentlyReading
}) {
    const [filter, setFilter] = useState("all-bookshelf-books");
    function handleFilter(newFilter) {
      setFilter(newFilter);
    }

    const filteredBooks = books.filter((book) => {
        if (filter === "to-be-read-books") {
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
      <Header title={"My Bookshelf"} />
      <main>
          <p>Achievements: </p>
          <StyledButtonWrapper>
          <StyledFilterButton
                type="button"
                aria-label="shows list of books all books on your shelf"
                onClick={() => {
                  handleFilter("all-bookshelf-books");
                }}
                $isActive={filter === "all-bookshelf-books" ? true : false}
              >
                All books
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
                Currently reading
            </StyledFilterButton>
            <StyledFilterButton
                type="button"
                aria-label="shows list of books you already read"
                onClick={() => {
                  handleFilter("already-read-books");
                }}
                $isActive={filter === "already-read-books" ? true : false}
              >
                Already read
            </StyledFilterButton>
          </StyledButtonWrapper>
        {filteredBooks?.length > 0 ? (
          <BookList
            books={filteredBooks}
            booksData={booksData}
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
      <Navigation />
      </>
    )
}