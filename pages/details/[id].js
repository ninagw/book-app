import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ButtonWishlist from "@/components/Buttons/ButtonWishlist";
import ButtonCurrentlyReading from "@/components/Buttons/ButtonCurrentlyReading";
import ButtonAlreadyRead from "@/components/Buttons/ButtonAlreadyRead";
import ArrowBackIcon from "@/components/Icons/ArrowBackIcon";
import ButtonTBR from "@/components/Buttons/ButtonTBR";

const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
`;

const StyledButtonContainer = styled.section`
  display: flex;
  gap: 10px;
  padding-top: 10px;
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
        <StyledButtonContainer>
          <ButtonWishlist
              handleToggleBookmark={handleToggleBookmark}
              id={currentBook.id}
              isBookmarked={currentBookData?.isBookmarked}
              booksData={booksData}/>
          <ButtonTBR
              handleToggleTBR={handleToggleTBR}
              id={currentBook.id}
              $isTBR={currentBookData?.isTBR}
              booksData={booksData}/>
          <ButtonAlreadyRead
              handleToggleAlreadyRead={handleToggleAlreadyRead}
              id={currentBook.id}
              $isAlreadyRead={currentBookData?.isAlreadyRead}
              booksData={booksData}/>
          <ButtonCurrentlyReading 
              handleToggleCurrentlyReading={handleToggleCurrentlyReading}
              id={currentBook.id}
              $isCurrentlyReading={currentBookData?.isCurrentlyReading}
              booksData={booksData}/>
        </StyledButtonContainer>
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
