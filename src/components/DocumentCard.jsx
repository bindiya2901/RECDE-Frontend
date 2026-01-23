
export default function DocumentCard({ title, onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="cursor-pointer p-6 rounded-2xl
                 bg-white/10 backdrop-blur-xl
                 border border-white/20
                 hover:border-cyan-400
                 transition shadow-xl"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">
        Click to open collaborative editor
      </p>
    </div>
  );
}
