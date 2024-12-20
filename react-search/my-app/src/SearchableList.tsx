import './SearchableList.css';
import { useState } from 'react';

type ItemsProp = {
  quotes: string[];
};

type SearchableListProps = {
  quotes: string[];
};

export function SearchableList({ quotes }: SearchableListProps) {
  const [searchedQuote, setSearchedQuote] = useState('');

  const filteredQuotes = quotes.filter((quote) =>
    quote.toLowerCase().includes(searchedQuote.toLowerCase())
  );

  return (
    <>
      <SearchBar value={searchedQuote} onChange={setSearchedQuote} />
      <Items quotes={filteredQuotes} />
    </>
  );
}

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <>
      <label htmlFor="search">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          id="search"
          name="search"></input>
      </label>
    </>
  );
}

function Items({ quotes }: ItemsProp) {
  const quoteList = quotes.map((quote, index) => <li key={index}>{quote}</li>);
  return <ul>{quoteList}</ul>;
}
