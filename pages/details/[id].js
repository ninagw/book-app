import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledBookmarkButton = styled.button`
  background-color: ${({ $isBookmarked }) =>
    $isBookmarked ? "var(--pink-color)" : "var(--lightgrey-color)"};
  border-radius: var(--border-radius);
  border: none;
  padding: 0.4rem;
`;

const StyledTBRButton = styled.button `
  background-color: ${({ $isTBR }) =>
    $isTBR ? "var(--pink-color)" : "var(--lightgrey-color)"};
  border-radius: var(--border-radius);
  border: none;
  padding: 0.4rem;
`;

const StyledAlreadyReadButton = styled.button`
  background-color: ${({ $isAlreadyRead }) =>
    $isAlreadyRead ? "var(--pink-color)" : "var(--lightgrey-color)"};
  border-radius: var(--border-radius);
  border: none;
  padding: 0.4rem;
`;

const StyledCurrentlyReadingButton = styled.button`
  background-color: ${({ $isCurrentlyReading }) =>
    $isCurrentlyReading ? "var(--pink-color)" : "var(--lightgrey-color)"};
  border-radius: var(--border-radius);
  border: none;
  padding: 0.4rem;
`;

export default function BookDetailsPage({books, booksData, handleToggleBookmark, handleToggleTBR, handleToggleAlreadyRead, handleToggleCurrentlyReading}) {
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
console.log("ROUTER QUERY ID: ", id); // aktuell nur first book id, da hart gecoded in Booklist componente

  if (!currentBook) {
    return <p>No books found.</p>;
  }

  return (
    <>
      <header>
        <Link href={`/`}>Back</Link>
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
            aria-label={currentBookData?.isBookmarked ? "remove from your wishlist" : "add to your wishlist"}
            >
              Set book on wishlist
        </StyledBookmarkButton>
        <StyledTBRButton 
            type="button"
            onClick={() => handleToggleTBR(id)}
            $isTBR={currentBookData?.isTBR}
            aria-label={currentBookData?.isTBR ? "remove from your to be read list" : "add to your to be read list"}
            >
              Set on your TBR list
        </StyledTBRButton> 
        <StyledAlreadyReadButton 
            type="button"
            onClick={() => handleToggleAlreadyRead(id)}
            $isAlreadyRead={currentBookData?.isAlreadyRead}
            aria-label={currentBookData?.isAlreadyRead ? "remove from your already read list" : "add to your already read list"}
            >
              Book already read
        </StyledAlreadyReadButton> 
        <StyledCurrentlyReadingButton 
            type="button"
            onClick={() => handleToggleCurrentlyReading(id)}
            $isCurrentlyReading={currentBookData?.isCurrentlyReading}
            aria-label={currentBookData?.isCurrentlyReading ? "remove from your currently reading list" : "add to your currently reading list"}
            >
              Book currently reading
        </StyledCurrentlyReadingButton> 
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
