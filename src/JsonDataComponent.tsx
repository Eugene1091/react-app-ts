import React from 'react';
import { propsData } from './App';

export const JsonDataComponent: React.FC<propsData> = ({ props }) => {

  const { title, description, items } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
