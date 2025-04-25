import styled from "styled-components";
import AlreadyReadIcon from "@/components/Icons/AlreadyReadIcon";

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

export default function ButtonAlreadyRead({ id, booksData, isAlreadyRead, handleToggleAlreadyRead }) {
    const currentBookData = booksData?.find((bookData) => bookData.id === id);

  return (
    <StyledAlreadyReadButton 
            type="button"
            onClick={() => handleToggleAlreadyRead(id)}
            $isAlreadyRead={currentBookData?.isAlreadyRead}
            aria-label={currentBookData?.isAlreadyRead ? "remove book from your already read list" : "add book to your already read list"}
            >
              <AlreadyReadIcon $isActive={currentBookData?.isAlreadyRead}/>
        </StyledAlreadyReadButton> 
  );
}