import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Shared/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
