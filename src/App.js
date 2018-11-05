import React from 'react';
import Card from './components/Card'
import Quiz from './components/Quiz'

const App = () =>
  <div>
    <Card
      concept="één"
      definition="1"
      onOk={() => console.log("test onOk")}
      onNok={() => console.log("test onNok")}
    />
    <Quiz cards={
      [
        { concept: "123", definition: "bar" },
        { concept: "234", definition: "foo" },
        { concept: "345", definition: "abc" },
        { concept: "456", definition: "def" },
        { concept: "567", definition: "ghi" },
        { concept: "678", definition: "jkl" },
        { concept: "789", definition: "mno" },
      ]
    } />
  </div>

export default App;