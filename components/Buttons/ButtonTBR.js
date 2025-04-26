import styled from "styled-components";
import TBRIcon from "../Icons/TBRIcon";

const StyledTBRButton = styled.button`
    background-color: ${({ $isTBR }) =>
            $isTBR ? "var(--pink-color)" : "var(--background-color)"};
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

export default function ButtonTBR({ id, booksData, isTBR, handleToggleTBR }) {
    const currentBookData = booksData?.find((bookData) => bookData.id === id);

  return (
    <StyledTBRButton 
    type="button"
            onClick={() => handleToggleTBR(id)}
            $isTBR={currentBookData?.isTBR}
            aria-label={currentBookData?.isTBR ? "remove book from your to be read list" : "add book to your to be read list"}
            >
        <TBRIcon $isActive={currentBookData?.isTBR} />
    </StyledTBRButton>
  );
}