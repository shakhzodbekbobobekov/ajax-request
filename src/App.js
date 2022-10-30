import Collaborative from "./components/Collaborative";
import Management from "./components/Management";
import CustomerSupport from "./components/CustomerSupport";

import "./App.css";

function App() {
  return (
    <div>
      <Management />
      <CustomerSupport />
      <Collaborative />
    </div>
  );
}

export default App;
