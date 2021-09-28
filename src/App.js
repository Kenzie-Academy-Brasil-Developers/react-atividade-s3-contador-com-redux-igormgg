import "./reset.css";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">Contador com Redux</header>
      <main>
        <Counter />
      </main>
    </div>
  );
}

export default App;
