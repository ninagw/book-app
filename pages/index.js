import { useState } from "react";
import BookList from "@/components/BookList";
import SearchBar from "@/components/Searchbar";

export default function HomePage({ books }) {
  const [searchTerm, setSearchTerm] = useState("");

  // const filteredBooks = books.filter((book) =>
  //   book.author.toLowerCase().includes(searchTerm.toLowerCase()) // filtert Buch mit entsprechendem Titel
  // );

  // Filtert Bücher basierend auf dem Suchbegriff
  const filteredBooks = books.filter(({ title, genre, publishYear, author }) => {
      const titleMatch = title.toLowerCase().includes(searchTerm);
      const genreMatch = genre.toLowerCase().includes(searchTerm);
      const yearMatch = publishYear.toString().includes(searchTerm);
      const authorMatch = author.toLowerCase().includes(searchTerm);

      return titleMatch || genreMatch || yearMatch || authorMatch;
    })

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
        <p>Searching for: {searchTerm}</p> {/* // Zeigt den Suchstatus */}
        <SearchBar
          searchTerm={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value.toLowerCase())}} // Aktualisiere Zustand
        />
        <BookList books={filteredBooks} />
      </main>
    </>
  );
}