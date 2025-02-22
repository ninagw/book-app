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
    <Image src={"/public/assets/icons/heart_empty.png"} alt="heart icons" height={20} width={20}/>
    {/* <a href="https://www.flaticon.com/free-icons/heart" >Heart icons created by Freepik - Flaticon</a> */}
    </StyledBookmarkButton>
  );
}