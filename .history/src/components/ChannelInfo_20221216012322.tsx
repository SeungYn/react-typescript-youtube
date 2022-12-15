import React from 'react';
interface Props {
  children?: React.ReactNode;
  id: string;
  name: string;
}
export default function ChannelInfo({ id, name }: Props) {
  return <div>{name}</div>;
}
