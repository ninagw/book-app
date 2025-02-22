import styled from "styled-components";
import Image from "next/image";

const StyledBookmarkButton = styled.button`
  background-color: ${({ $isBookmarked }) =>
    $isBookmarked ? "var(--pink-color)" : "var(--lightgrey-color)"};
  border-radius: var(--border-radius);
  border: none;
  padding: 0.4rem;
`;

export default function ButtonWishlist({ isBookmarked, handleToggleBookmark }) {
  return (
    <StyledBookmarkButton 
    type="button"
    onClick={() => handleToggleBookmark(id)}
    $isBookmarked={currentBookData?.isBookmarked}
    booksData={booksData}
    aria-label={currentBookData?.isBookmarked ? "remove from your wishlist" : "add to your wishlist"}
    >
    <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a>
    </StyledBookmarkButton>
  );
}