import { useRouter } from "next/router";

export default function BookDetailsPage({books}) {
const router = useRouter();
const { id } = router.query;
const pathName = router.pathname;

if (!id) {
    return <p>Loading...</p>;
  }

 
const currentBook = books.find((book) => book.id == id);


  if (!currentBook) {
    return <p>Book not found.</p>;
  }

  return (
    <>
      <header>
        <h1>Book details</h1>
      </header>
      <main>
        {/* <p>{currentBook.title}</p> */}
      </main>
    </>
  );
}