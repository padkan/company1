import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./Home";
import Roles from "./Roles";
import Conditions from "./Conditions";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/conditions" element={<Conditions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
