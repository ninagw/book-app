import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  border-top: 1.5px solid var(--text-color);
  margin-top: 20px;
  font-size: 1.2rem;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 600px;
`;

const StyledListElement = styled.li`
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--text-color)" : "var(--background-color)"};
  width: 50%;
  padding: 7px 0px;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  display: block;
  text-align: center;
  color: ${({ $isActive }) =>
    $isActive ? "var(--background-color)" : "var(--text-color)"};
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <nav>
        <StyledList>
            <StyledListElement $isActive={router.pathname === "/"}><NavigationLink $isActive={router.pathname === "/"} href="/">Book Shop</NavigationLink></StyledListElement>
            <StyledListElement $isActive={router.pathname === "/wishlist"}><NavigationLink $isActive={router.pathname === "/wishlist"} href="/wishlist">Wishlist</NavigationLink></StyledListElement>
        </StyledList>
    </nav>
  );
}
