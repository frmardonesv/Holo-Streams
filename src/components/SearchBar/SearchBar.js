import React from "react";
import { SearchBarContainer } from "./SearchBarStyles";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../../context/context";

const SearchBar = () => {
  const {
    filtros: { text },
    updateCategory,
  } = useGlobalContext();
  return (
    <SearchBarContainer>
      <AiOutlineSearch />
      <input
        placeholder="Search Hololive Talents..."
        type="text"
        name="text"
        onChange={updateCategory}
        value={text}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
