import React from 'react';

type FooterProps = {
  text: string;
}

export const Footer: React.FC<FooterProps> = (props) => (
  <footer>This is Footer and {props.text}</footer>
);
