import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { title } = video.snippet;
  return (
    <section>
      <iframe
        width='100%'
        height='640'
        src={`http://www.youtube.com/embed/${video.id}`}
      ></iframe>
      <div>
        <h2>{title}</h2>
      </div>
    </section>
  );
}
