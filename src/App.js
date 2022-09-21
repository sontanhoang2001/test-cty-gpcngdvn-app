import "./App.css";
import AddEmploye from "./Components/employee";
import Header from "./Components/header";
import { Route, Routes } from "react-router";
import Home from "./Components/home";

function App() {
  return (
    <div className="App min-w-[444px]">
      <Header />
      <main className="pt-16 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/employee" element={<AddEmploye />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
