import React, { useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
export default function SearchHeader() {
  const [text, setText] = useState<string | null>('');

  return (
    <header>
      <div>
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form>
        <input type='text' />
        <button>btn</button>
      </form>
    </header>
  );
}
