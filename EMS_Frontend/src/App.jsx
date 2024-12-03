import EmployeeComp from "./components/EmployeeComp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* // https://localhost:5173 */}
          <Route path="/" element={<ListEmployee />}></Route>
          {/* // https://localhost:5173/employees  */}
          <Route path="/employees" element={<ListEmployee />}></Route>
          {/* // https://5173/add-employee */}
          <Route path="/add-employee" element={<EmployeeComp />}></Route>
          {/* // https://5173/update-employee/1 */}
          <Route path="/update-employee/:id" element={<EmployeeComp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
