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
  display: flex;
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 2;
  `;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 0 0 23% 23%;
  justify-content: center;
  color: var(--text-color);
  margin: 0;
  background: rgba(0, 0, 0, 0.8)
`;

const StyledImageBackground = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: -1;
  `;

const StyledImage = styled(Image)`
    position: absolute;
    width: 130px;
    height: auto;
    z-index: 1;
`;

const StyledButtonContainer = styled.section`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  gap: 10px;
  z-index: 2;
  `;

const StyledHeadlineContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0;
  padding-top: 20px;
  margin: 0;`

const StyledStatsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;`

const StyledDescriptionContainer = styled.p`
  line-height: var(--line-height-copy);
  margin: 0 20px;`

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
      <StyledImageContainer>
        <StyledLink href={`/`} role="button" aria-label="Back button"><ArrowBackIcon/></StyledLink>
        <StyledImageBackground
            alt={currentBook.title}
            height={100}
            width={70}
            src={currentBook.cover}
            id={currentBook.id}/>
        <StyledImage
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
          <ButtonCurrentlyReading 
              handleToggleCurrentlyReading={handleToggleCurrentlyReading}
              id={currentBook.id}
              $isCurrentlyReading={currentBookData?.isCurrentlyReading}
              booksData={booksData}/>
          <ButtonAlreadyRead
              handleToggleAlreadyRead={handleToggleAlreadyRead}
              id={currentBook.id}
              $isAlreadyRead={currentBookData?.isAlreadyRead}
              booksData={booksData}/>
        </StyledButtonContainer>
      </StyledImageContainer>
      </header>
      <main>
        <StyledHeadlineContainer>
          <h2>{currentBook.title}</h2>
          <p>by {currentBook.author}</p>
        </StyledHeadlineContainer>
        <StyledStatsContainer>
          <p>{currentBook.publishYear}</p>
          <p>{currentBook.pages} pages</p>
          <p>{currentBook.genre}</p>
        </StyledStatsContainer>
        <StyledDescriptionContainer>{currentBook.description}</StyledDescriptionContainer>
      </main>
    </>
  );
}
