import React from "react";
import Quiz from "./components/Quiz";

const App = () => (
  <Quiz
    cards={[
      { concept: "123", definition: "bar" },
      { concept: "234", definition: "foo" },
      { concept: "345", definition: "abc" }
      // { concept: "456", definition: "def" },
      // { concept: "567", definition: "ghi" },
      // { concept: "678", definition: "jkl" },
      // { concept: "789", definition: "mno" }
    ]}
  />
);

export default App;
