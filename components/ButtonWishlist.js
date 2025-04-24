import styled from "styled-components";
import Image from "next/image";
import heartRed from "/public/assets/icons/heart_red.png";
import { useRouter } from "next/router";
import WishlistIcon from "@/components/WishlistIcon";

const StyledBookmarkButton = styled.button`
    background-color: ${({ $isBookmarked }) =>
            $isBookmarked ? "var(--pink-color)" : "var(--lightgrey-color)"};
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  padding: 0.4rem;
`;

export default function ButtonWishlist({ id, books, booksData, isBookmarked, handleToggleBookmark }) {
    //const router = useRouter();
    //const { id } = router.query;
    //const pathName = router.pathname;
    //const currentBook = books.find((book) => book.id === id);
    const currentBookData = booksData?.find((bookData) => bookData.id === id);

  return (
    <StyledBookmarkButton 
    type="button"
    onClick={() => handleToggleBookmark(id)}
    //$isBookmarked={currentBookData?.isBookmarked}
    $isBookmarked={isBookmarked}
    booksData={booksData}
    //aria-label={currentBookData?.isBookmarked ? "remove from your wishlist" : "add to your wishlist"}
    aria-label={isBookmarked ? "remove from your wishlist" : "add to your wishlist"}

    >
        <WishlistIcon $isActive={isBookmarked} />
    </StyledBookmarkButton>
  );
}