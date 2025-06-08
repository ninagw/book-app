import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import BookshopIcon from "@/components/Icons/BookshopIcon";
import WishlistIcon from "@/components/Icons/WishlistIcon";
import TrophyIcon from "@/components/Icons/TrophyIcon";
import BookshelfIcon from "@/components/Icons/BookshelfIcon";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding-left: 0;
  border-top: 1.5px solid var(--text-color);
  margin-top: 20px;
  //font-size: 1.2rem;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledListElement = styled.li`
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--text-color)" : "var(--background-color)"};
  width: 50%;
  padding: 7px 0px;
  font-size: 0.9rem;
  font-weight: 200;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  display: block;
  text-align: center;
  color: ${({ $isActive }) =>
    $isActive ? "var(--background-color)" : "var(--text-color)"};
`;

const StyledNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Navigation({isBookmarked}) {
  const router = useRouter();

  return (
    <nav>
        <StyledList>
            <StyledListElement $isActive={router.pathname === "/"}>
                <NavigationLink $isActive={router.pathname === "/"} href="/">
                    <StyledNavContainer><BookshopIcon $isActive={router.pathname === "/"}/>Book Shop</StyledNavContainer>
                </NavigationLink>
            </StyledListElement>
            <StyledListElement $isActive={router.pathname === "/wishlist"}>
                <NavigationLink $isActive={router.pathname === "/wishlist"} href="/wishlist">
                    <StyledNavContainer><WishlistIcon $isActive={router.pathname === "/wishlist"}/>Wishlist</StyledNavContainer>
                </NavigationLink>
            </StyledListElement>
            <StyledListElement $isActive={router.pathname === "/challenges"}>
                <NavigationLink $isActive={router.pathname === "/challenges"} href="/challenges">
                    <StyledNavContainer><TrophyIcon $isActive={router.pathname === "/challenges"}/>Challenges</StyledNavContainer>
                </NavigationLink>
            </StyledListElement>
            <StyledListElement $isActive={router.pathname === "/bookshelf"}>
                <NavigationLink $isActive={router.pathname === "/bookshelf"} href="/bookshelf">
                    <StyledNavContainer><BookshelfIcon $isActive={router.pathname === "/bookshelf"}/>Bookshelf</StyledNavContainer>
                </NavigationLink>
            </StyledListElement>
        </StyledList>
    </nav>
  );
}
