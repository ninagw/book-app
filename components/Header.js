import styled from "styled-components";

const StyledHeader = styled.header`
    margin: 20px 0;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Header({title}) {

  return (
    <StyledHeader>
        <h1>{title}</h1>
    </StyledHeader>
  );
}
