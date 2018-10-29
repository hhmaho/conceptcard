import React from 'react';
import './App.css';
import Card from './components/Card'

const App = () =>
  <div>
    <Card
      concept="één"
      definition="1"
      onOk={() => console.log("test onOk")}
      onNok={() => console.log("test onNok")}
    />
  </div>

export default App;