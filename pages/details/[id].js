import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ButtonWishlist from "@/components/Buttons/ButtonWishlist";
import ArrowBackIcon from "@/components/Icons/ArrowBackIcon";
import AlreadyReadIcon from "@/components/Icons/AlreadyReadIcon";

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

const StyledAlreadyReadButton = styled.button`
  background-color: ${({ $isAlreadyRead }) =>
    $isAlreadyRead ? "var(--pink-color)" : "var(--background-color)"};
  border-radius: var(--border-radius);
  decoration: none;
  border: none;
  // border: 1px solid var(--text-color);
  padding: 5px 3px 3px 4px;
  cursor: pointer;
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
        {/* <StyledBookmarkButton 
            type="button"
            onClick={() => handleToggleBookmark(id)}
            $isBookmarked={currentBookData?.isBookmarked}
            booksData={booksData}
            aria-label={currentBookData?.isBookmarked ? "remove book from your wishlist" : "add book to your wishlist"}
            >
              Set book on wishlist
        </StyledBookmarkButton> */}
        <StyledTBRButton 
            type="button"
            onClick={() => handleToggleTBR(id)}
            $isTBR={currentBookData?.isTBR}
            aria-label={currentBookData?.isTBR ? "remove book from your to be read list" : "add book to your to be read list"}
            >
              Set on your TBR list
        </StyledTBRButton> 
        {/* <ButtonAlreadyRead
            handleToggleBookmark={handleToggleBookmark}
            id={currentBook.id}
            isBookmarked={currentBookData?.isBookmarked}
            booksData={booksData}/> */}
        <StyledAlreadyReadButton 
            type="button"
            onClick={() => handleToggleAlreadyRead(id)}
            $isAlreadyRead={currentBookData?.isAlreadyRead}
            aria-label={currentBookData?.isAlreadyRead ? "remove book from your already read list" : "add book to your already read list"}
            >
              <AlreadyReadIcon $isActive={currentBookData?.isAlreadyRead}/>
        </StyledAlreadyReadButton> 
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
