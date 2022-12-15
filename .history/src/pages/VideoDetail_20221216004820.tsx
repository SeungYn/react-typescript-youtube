import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
  const st = useLocation();
  console.log(st);
  return <div>videodetail</div>;
}
