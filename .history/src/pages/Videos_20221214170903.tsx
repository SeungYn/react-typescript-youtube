import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  console.log(keyword);
  return <div>videos</div>;
}
