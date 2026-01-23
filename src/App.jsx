import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Document from "./pages/Document";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark min-h-screen" : "min-h-screen"}>
      <BrowserRouter>
        <Navbar toggleTheme={() => setDark(!dark)} />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/doc/:id" element={<Document />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
