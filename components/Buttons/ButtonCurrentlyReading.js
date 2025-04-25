import styled from "styled-components";
import CurrentlyReadingIcon from "../Icons/CurrentlyReadingIcon";

const StyledCurrentlyReadingButton = styled.button`
  background-color: ${({ $isCurrentlyReading }) =>
    $isCurrentlyReading ? "var(--pink-color)" : "var(--background-color)"};
  border-radius: var(--border-radius);
  decoration: none;
  border: none;
  // border: 1px solid var(--text-color);
  // padding: 6px 3px 2px 4px;
  cursor: pointer;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  transition: background-color 0.4s ease;
`;

export default function ButtonCurrentlyReading({ id, booksData, isCurrentlyReading, handleToggleCurrentlyReading }) {
    const currentBookData = booksData?.find((bookData) => bookData.id === id);

  return (
    <StyledCurrentlyReadingButton 
            type="button"
            onClick={() => handleToggleCurrentlyReading(id)}
            $isCurrentlyReading={currentBookData?.isCurrentlyReading}
            aria-label={currentBookData?.isCurrentlyReading ? "remove book from your currently reading list" : "add book to your currently reading list"}
            >
              <CurrentlyReadingIcon $isActive={currentBookData?.isCurrentlyReading}/>
        </StyledCurrentlyReadingButton>
  );
}