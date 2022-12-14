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
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <h1>Youtube</h1>
      </Link>

      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={text}
          onChange={onChange}
          placeholder='Search...'
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
