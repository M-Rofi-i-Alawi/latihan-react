import { useState } from "react";
import Header from './components/header.jsx';

function App() {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Belajar React bareng WPU 🚀</h1>
      <button onClick={handleClick}>
        Like ({likes})
      </button>
    </div>
  );
}

export default App;
