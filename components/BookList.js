import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

const StyledList = styled.ul`
  padding-inline-start: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 13px;
`;

export default function BookList({ books }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <StyledList>
      {books?.map((book) => (
        <li key={book.id}>
          <Image
            alt={book.title}
            height={150}
            width={100}
            src={book.cover}
            id={book.id}
            onClick={() => {
              router.push(`/details/OL19096402W`);
              // router.push(`/details/${id}`);
            }}
          />
        </li>
      ))}
    </StyledList>
  );
}
