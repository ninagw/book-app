import { useRouter } from "next/router";

export default function BookDetailsPage({books}) {
  console.log(books);

const router = useRouter();
const { slug } = router.query;
const pathName = router.pathname;
const [currentBook, setCurrentBook] = useState(null);


useEffect(() => {
  // Sicherstellen, dass `id` und `books` verfügbar sind
  if (id && books.length > 0) {
    const book = books.find((book) => String(book.id) === String(id));
    setCurrentBook(book);
  }
}, [id, books]);

if (!slug) {
    return <p>Loading...</p>;
  }

 
// const currentBook = books.find((book) => book.id == slug);


//   if (!currentBook) {
//     return <p>Book not found.</p>;
//   }

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