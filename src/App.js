import { useState } from "react";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  let randomNumberGenerator = () => {
    return Math.floor(Math.random() * 255);
  };

  const [randomNumber, setRandomNumber] = useState(randomNumberGenerator());

  const [number, setNumber] = useState(0);
  let newNumber = () => {
    setRandomNumber(randomNumberGenerator());
  };
  return (
    <div className="App" onClick={() => setNumber(number + 1)}>
      <div className="numberContainer">
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
          >
            {number}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
