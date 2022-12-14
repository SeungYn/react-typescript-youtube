import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();

  return <div>videos {keyword ? `${keyword}` : '핫트렌드'}</div>;
}
