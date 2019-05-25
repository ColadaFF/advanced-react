import React, {
  createContext,
  useState,
  useEffect,
  useRef
} from "react";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

const SearchContext = createContext({
  value: "",
  lastValue: "",
  setValue: () => {}
});

export const SearchProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [lastValue, setLastValue] = useState("");
  const subjectRef = useRef(new Subject());

  const updateValue = value => {
    setValue(value);
    subjectRef.current.next(value);
  };

  useEffect(() => {
    const subscription = subjectRef.current
      .pipe(debounceTime(500))
      .subscribe(setLastValue);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <SearchContext.Provider
      value={{ value, setValue: updateValue, lastValue }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
