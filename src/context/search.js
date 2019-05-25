import { createContext, useState } from "react";

const SearchContext = createContext({
  value: "",
  setValue: () => {}
});

export default SearchContext;
