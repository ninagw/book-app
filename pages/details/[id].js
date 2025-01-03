import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

const StyledBookmarkButton = styled.button`
  background-color: ${({ $isBookmarked }) =>
    $isBookmarked ? "var(--pink-color)" : "var(--lightgrey-color)"};
  border-radius: var(--border-radius);
  border: none;
  padding: 0.4rem;
`;

export default function BookDetailsPage({books, booksData, handleToggleBookmark}) {
const router = useRouter();
const { id } = router.query;
const pathName = router.pathname;
const currentBook = books.find((book) => book.id === id);
const currentBookData = booksData?.find((bookData) => bookData.id === id);

if (!router.isReady) {
  return <p>Loading...</p>;
}

if (!id) {
    return <p>Loading...</p>;
  }
 
console.log("BOOKS: ", books);
console.log("ROUTER QUERY ID: ", id); // ERROR: only first book id

  if (!currentBook) {
    return <p>No books found.</p>;
  }

  return (
    <>
      <header>
        <h1>Book details</h1>
      </header>
      <main>
        <Image
            alt={currentBook.title}
            height={100}
            width={70}
            src={currentBook.cover}
            id={currentBook.id}/>
        <StyledBookmarkButton 
            type="button"
            onClick={() => handleToggleBookmark(id)}
            $isBookmarked={currentBookData?.isBookmarked}
            booksData={booksData}
            // aria-label={isBookmarked ? "remove from my-wishlist" : "add to my-wishlist"}
            >
              Set book on wishlist
            </StyledBookmarkButton>
        <h3>{currentBook.title}</h3>
        <p>{currentBook.author}</p>
        <p>{currentBook.publishYear}</p>
        <p>{currentBook.pages}</p>
        <p>{currentBook.genre}</p>
        <p>{currentBook.description}</p>
      </main>
    </>
  );
}
