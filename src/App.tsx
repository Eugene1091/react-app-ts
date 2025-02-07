import React from 'react';
import './App.css';
import { Footer } from './Footer.tsx';
import data from "./data.json";

type propsData = {
  props: {
    title: string;
    description: string;
    items: string[];
  }
}

const JsonDataComponent : React.FC<propsData> = ({ props }) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


const App = () => (
  <div className="App">
    <JsonDataComponent props={data} />
    <Footer text='lorem' />
  </div>
)

export default App;
