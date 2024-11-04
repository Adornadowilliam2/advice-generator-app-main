import { useState, useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import dice from "./assets/images/icon-dice.svg";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [id, setId] = useState("");
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setId(data.slip.id);
    } catch (error) {
      toast.error("Error fetching advice ", error);
      setAdvice("Failed to fetch advice. Please try again.");
      setId("");
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main>
      <ToastContainer />
      <section className="card-container">
        <h1>Advice #{id}</h1>
        <h2>🙶{advice}🙷</h2>
        <span class="image-span"></span>

        <div className="dice" onClick={fetchAdvice}>
          <img src={dice} alt="dice img" />
        </div>
      </section>
      <footer class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/Adornadowilliam2">
          William Adornado Jr.
        </a>
        .
      </footer>
    </main>
  );
}

export default App;
