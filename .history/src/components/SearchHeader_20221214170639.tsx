import React, { ChangeEvent, FormEvent, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { NavigateFunction, useNavigate } from 'react-router-dom';
export default function SearchHeader() {
  const [text, setText] = useState<string>('');

  const navigate: NavigateFunction = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>btn</button>
      </form>
    </header>
  );
}
