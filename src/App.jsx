import { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar toggleTheme={() => setDark(!dark)} />
    </div>
  );
}
