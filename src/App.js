import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
console.log(messages);

export default function App() {
  const [step, setstep] = useState(1);
  const [isOpen, setIopen] = useState(true);

  function handlePrivious() {
    if (step > 1) {
      setstep(function (currentstep) {
        return currentstep - 1;
      });
    }
  }
  function handleNext() {
    if (step < 3) {
      setstep(function (currentstep) {
        return currentstep + 1;
      });
    }
  }
  return (
    <div>
      <button
        className="close"
        onClick={function () {
          setIopen(!isOpen);
        }}
      >
        close
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "white" }}
              onClick={handlePrivious}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "white" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
