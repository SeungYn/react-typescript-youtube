import React from 'react';
import { BsYoutube } from 'react-icons/bs';
export default function SearchHeader() {
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