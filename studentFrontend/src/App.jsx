import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Create";
import Read from "./Read";
import Edit from "./Edit";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
