import { useRouter } from "next/router";
import Image from "next/image";

export default function BookDetailsPage({books, booksData}) {
const router = useRouter();
const { id } = router.query;


if (!id) {
    return <p>Loading...</p>;
  }
 
const currentBook = books.find((book) => book.id == id);

console.log("BOOKS: ", books);
console.log("ROUTER QUERY ID: ", id); // ERROR: undefined at the moment

  if (!currentBook) {
    return <p>No books found.</p>;
  }

  return (
    <>
      <header>
        <h1>Book details</h1>
      </header>
      <main>
        <Image
            alt={currentBook.title}
            height={100}
            width={70}
            src={currentBook.cover}
            id={currentBook.id}/>
        <p>{currentBook.title}</p>
      </main>
    </>
  );
}
