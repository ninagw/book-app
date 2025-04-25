import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ButtonWishlist from "@/components/Buttons/ButtonWishlist";
import ButtonAlreadyRead from "@/components/Buttons/ButtonAlreadyRead";
import ArrowBackIcon from "@/components/Icons/ArrowBackIcon";

const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
`;

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
  cursor: pointer;
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
        <StyledLink href={`/`}><ArrowBackIcon/></StyledLink>
        <h1>Book details</h1>
      </header>
      <main>
        <Image
            alt={currentBook.title}
            height={100}
            width={70}
            src={currentBook.cover}
            id={currentBook.id}/>
        <ButtonWishlist
            handleToggleBookmark={handleToggleBookmark}
            id={currentBook.id}
            isBookmarked={currentBookData?.isBookmarked}
            booksData={booksData}/>
        <StyledTBRButton 
            type="button"
            onClick={() => handleToggleTBR(id)}
            $isTBR={currentBookData?.isTBR}
            aria-label={currentBookData?.isTBR ? "remove book from your to be read list" : "add book to your to be read list"}
            >
              Set book on your TBR list
        </StyledTBRButton> 
        <ButtonAlreadyRead
            handleToggleAlreadyRead={handleToggleAlreadyRead}
            id={currentBook.id}
            $isAlreadyRead={currentBookData?.isAlreadyRead}
            booksData={booksData}/>
        <StyledCurrentlyReadingButton 
            type="button"
            onClick={() => handleToggleCurrentlyReading(id)}
            $isCurrentlyReading={currentBookData?.isCurrentlyReading}
            aria-label={currentBookData?.isCurrentlyReading ? "remove book from your currently reading list" : "add book to your currently reading list"}
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
