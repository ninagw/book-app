import { useState } from "react";
import BookList from "@/components/BookList";
import SearchBar from "@/components/Searchbar";

export default function HomePage({ books }) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("SEARCHTERM", searchTerm);


  // Filtere die Bücher basierend auf dem Suchbegriff
  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(searchTerm.toLowerCase()) // filtert Buch mit entsprechendem Titel
  );

  // function handleSearch(event) {
  //   const { value } = event.target;
  //   setSearchTerm(value);
  // }

  // const [filterModal, setFilterModal] = useState(false);

  // function handleToggleFilterModal() {
  //   setFilterModal(!filterModal);
  // }

  // function handleSearchClick() {
  //   const searchedBooks = books.filter((book) => book.includes(searchTerm));
  //   return searchedBooks
  // }

  return (
    <>
      <header>
        <h1>Book Hunting</h1>
      </header>
      <main>
        <p>Searching for: {searchTerm}</p> {/* Zeigt den Suchstatus */}
        <SearchBar
          searchTerm={searchTerm}
          onChange={(event) => {
            console.log("Input value:", event.target.value); // Überprüfe den Wert
            setSearchTerm(event.target.value.toLowerCase())}} // Aktualisiere Zustand

          // setSearchTerm={setSearchTerm}
          // handleSearchClick={() => handleSearchClick()}
        />

        {/* <button type="button" onClick={handleToggleFilterModal}>
          Enter
        </button> */}
        <BookList books={filteredBooks} />
      </main>
    </>
  );
}