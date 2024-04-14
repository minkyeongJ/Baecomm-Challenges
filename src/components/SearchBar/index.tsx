import { useEffect, useRef } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 60%;
  padding: 10px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

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
      <Input
        id={id}
        aria-label="검색창"
        placeholder="검색어를 입력해주세요."
        type="search"
        name={name}
        defaultValue={query}
        ref={inputRef}
      />
      <Button type="submit">검색</Button>
    </>
  );
};

export default SearchBar;
