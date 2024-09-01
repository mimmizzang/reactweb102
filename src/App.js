import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
