
export default function Navbar({ toggleTheme }) {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
                 bg-white/10 backdrop-blur-xl
                 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          RECDE
        </h1>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg
                     bg-black/30 hover:bg-black/50
                     transition"
        >
          🌙 / ☀️
        </button>
      </div>
    </nav>
  );
}
