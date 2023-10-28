import Title from "./components/Title.jsx";
import Counter from "./components/Counter.jsx";

import anonovo from "./assets/anonovo.jpg";

import useCountdown from "./hooks/useCountdown.jsx";

import "./App.css";


function App() {
  const [day, hour, minute, second] = useCountdown("jan 1, 2024 00:00:00");
  
  return (
    <div className="App" style={{backgroundImage: `url(${anonovo})` }}>
      <div className="container">
        <Title title="Contagem regressiva para 2024!"/>
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
