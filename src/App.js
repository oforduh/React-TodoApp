import "./App.css";
import Header from "./component/header/Header";
import Option from "./component/options/Option";

function App() {
  const title = "Todo App";
  return (
    <div className="App">
      <Header title={title} />
      <Option />
    </div>
  );
}

export default App;
