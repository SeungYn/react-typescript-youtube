import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();

  useEffect(() => {
    axios.get('/videos/popular.json').then((res) => console.log(res));
  }, [keyword]);
  return <div>videos {keyword ? `${keyword}` : '핫트렌드'}</div>;
}
