import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Appointmenr from "./Components/Appointment/Appointmenr";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Review from "./Components/Review/Review";
import Header from "./Components/Shared/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/appointment"
          element={<Appointmenr></Appointmenr>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
