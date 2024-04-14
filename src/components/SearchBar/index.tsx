import { useEffect, useRef } from "react";

interface Props {
  id: string;
  name: string;
  query: string;
}

const SearchBar = ({ id, name, query }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = query;
  }, [query]);

  return (
    <>
      <input
        id={id}
        aria-label="검색창"
        placeholder="검색어를 입력해주세요."
        type="search"
        name={name}
        defaultValue={query}
        ref={inputRef}
      />
      <button type="submit">검색</button>
    </>
  );
};

export default SearchBar;
