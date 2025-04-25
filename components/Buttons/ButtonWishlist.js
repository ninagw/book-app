import styled from "styled-components";
import WishlistIcon from "@/components/Icons/WishlistIcon";

const StyledBookmarkButton = styled.button`
    background-color: ${({ $isBookmarked }) =>
            $isBookmarked ? "var(--pink-color)" : "var(--background-color)"};
  border-radius: var(--border-radius);
  decoration: none;
  border: none;
  // border: 1px solid var(--text-color);
  // padding: 6px 5px 3px 5px;
  cursor: pointer;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  transition: background-color 0.4s ease;
`;

export default function ButtonWishlist({ id, booksData, isBookmarked, handleToggleBookmark }) {
    const currentBookData = booksData?.find((bookData) => bookData.id === id);

  return (
    <StyledBookmarkButton 
    type="button"
    onClick={() => handleToggleBookmark(id)}
    $isBookmarked={isBookmarked}
    booksData={booksData}
    aria-label={isBookmarked ? "remove book from your wishlist" : "add book to your wishlist"}
    >
        <WishlistIcon $isActive={isBookmarked} />
    </StyledBookmarkButton>
  );
}