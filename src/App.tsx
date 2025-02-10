import React from 'react';
import './App.css';
import { Footer } from './Footer.tsx';
import { JsonDataComponent } from './JsonDataComponent.tsx';
import data from "./data.json";

export type propsData = {
  props: {
    title: string;
    description: string;
    items: string[];
  }
}

const App = () => (
  <div className="App">
    <JsonDataComponent props={data} />
    <Footer text='lorem' />
  </div>
)

export default App;
