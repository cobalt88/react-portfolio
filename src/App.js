import "./App.css";
import { HelloWorld } from "./HelloWorld";
import { MyComponent } from "./MyComponent";

function App() {
  return (
    <div className="page-wrapper">
      <MyComponent />
      <HelloWorld />
    </div>
  );
}

export default App;
