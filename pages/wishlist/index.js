import Navigation from "@/components/Navigation";
import BookList from "@/components/BookList";

export default function Wishlist({
    books,
    booksData,
    handleToggleBookmark,
}) {
    // const [filter, setFilter] = useState("wishlist-books");
    
    // function handleFilter(newFilter) {
    //   setFilter(newFilter);
    // }

    const filteredBooks = books.filter((book) => 
        booksData.find((booksData) => booksData.id === book.id && booksData.isBookmarked)
    );

    return(
        <>
        <header>
        <h1>Wishlist</h1>
      </header>
      <main>
        {filteredBooks?.length > 0 ? (
          <BookList
            books={filteredBooks}
            handleToggleBookmark={handleToggleBookmark}
          />
        ) : (
          <p>You have not added any books to your wishlist yet.</p>
        )}
      </main>
      <Navigation />
      </>
    )
}