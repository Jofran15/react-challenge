import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users } from "./pages/Users";
import { Nationalities } from "./pages/Nationalities";
import { Home } from "./pages/Home";

function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Nationalities />} />
          <Route path="/users/nationality" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
 
  );
}

export default App;
