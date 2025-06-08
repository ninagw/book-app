import Navigation from "@/components/Navigation";
import BookList from "@/components/BookList";
import Header from "@/components/Header";
import styled from "styled-components";
import { useState } from "react";

const StyledFilterButton = styled.button`
  border-style: none;
  border-top: 1px solid var(--text-color);
  border-bottom: 1px solid var(--text-color);
  display: flex;
  aligm-items: center;
  justify-content: center;
  // box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.19);
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--text-color)" : "var(--background-color)"};
  color: ${({ $isActive }) =>
    $isActive ? "var(--background-color)" : "var(--text-color)"};
  padding: 4px;
  font-size: var(--font-size-copy);
`;

const StyledButtonWrapper = styled.section`
  display: flex;
  padding: 8px;
`;

export default function Challenges({
    books,
    booksData,
    handleToggleTBR,
    handleToggleAlreadyRead,
    handleToggleCurrentlyReading
}) {

    return(
      <>
      <Header title={"Book challenges"} />
      <main>
      </main>
      <Navigation />
      </>
    )
}