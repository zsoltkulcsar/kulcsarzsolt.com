import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Home isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
