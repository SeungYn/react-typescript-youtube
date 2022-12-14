import React, { useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
export default function SearchHeader() {
  const [text, setText] = useState<string>('');

  const onChange = (e) => {
    console.log(e);
  };

  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form>
        <input type='text' value={text} onChange={onChange} />
        <button>btn</button>
      </form>
    </header>
  );
}
