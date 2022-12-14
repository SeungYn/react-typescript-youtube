import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import {
  Link,
  NavigateFunction,
  useNavigate,
  useParams,
} from 'react-router-dom';
export default function SearchHeader() {
  const [text, setText] = useState<string>('');
  const { keyword } = useParams();
  const navigate: NavigateFunction = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`videos/${text}`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log(keyword);
    if (keyword === null) return;
    setText(keyword as string);
  }, []);

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
