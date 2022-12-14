import React, { ChangeEvent, FormEvent, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
export default function SearchHeader() {
  const [text, setText] = useState<string>('');

  const navigate: NavigateFunction = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`videos/${text}`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <header>
      <Link to='/'>
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>

      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
