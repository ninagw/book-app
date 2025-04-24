import styled from "styled-components";
import WishlistIcon from "@/components/Icons/WishlistIcon";

const StyledBookmarkButton = styled.button`
    background-color: ${({ $isBookmarked }) =>
            $isBookmarked ? "var(--background-color)" : "var(--lightgrey-color)"};
  border-radius: 50%;
  border: 1px solid var(--pink-color);
  cursor: pointer;
  display: flex;
  justify-content: center;
  //padding: 0.4rem;
  padding: 6px 5px 5px 5px
`;

export default function ButtonWishlist({ id, booksData, isBookmarked, handleToggleBookmark }) {
    const currentBookData = booksData?.find((bookData) => bookData.id === id);

  return (
    <StyledBookmarkButton 
    type="button"
    onClick={() => handleToggleBookmark(id)}
    $isBookmarked={isBookmarked}
    booksData={booksData}
    aria-label={isBookmarked ? "remove from your wishlist" : "add to your wishlist"}
    >
        <WishlistIcon $isActive={isBookmarked} />
    </StyledBookmarkButton>
  );
}