
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const createDoc = () => {
    navigate(`/doc/${crypto.randomUUID()}`);
  };

  return (
    <div className="min-h-screen px-10 pt-32 text-white">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <h1 className="text-6xl font-extrabold leading-tight">
          Collaborate.
          <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Create in Real-Time.
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-200 max-w-3xl">
          RECDE is a real-time collaborative document editor that allows multiple
          users to write, edit, and sync documents instantly from anywhere.
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-10 flex gap-6">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={createDoc}
            className="px-8 py-4 rounded-xl font-semibold
                       bg-gradient-to-r from-purple-600 to-indigo-600
                       shadow-xl shadow-purple-500/30"
          >
            ➕ Create New Document
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 rounded-xl font-semibold
                       bg-white/10 backdrop-blur-xl border border-white/20"
          >
            📖 View Demo
          </motion.button>
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <section className="mt-28 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12">How RECDE Works</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Create a Document",
              desc: "Start a new document with a single click. A unique link is generated instantly."
            },
            {
              title: "Share with Team",
              desc: "Share the document link with others and collaborate together in real time."
            },
            {
              title: "Edit & Sync Live",
              desc: "All changes sync instantly using WebSockets with cloud persistence."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl
                         border border-white/20 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {i + 1}. {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-28 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12">Why RECDE?</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            "⚡ Real-time editing with Socket.IO",
            "☁️ Cloud-stored documents (MongoDB Atlas)",
            "🧑‍🤝‍🧑 Multi-user collaboration",
            "🎨 Modern UI with animations & gradients",
            "🔒 Secure backend with scalable architecture",
            "🌍 Deployed on Vercel & Render"
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="p-6 rounded-xl bg-black/30 border border-white/10"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 mb-20 text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          Start collaborating now
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          Build, edit, and share documents instantly with RECDE.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={createDoc}
          className="px-12 py-5 rounded-2xl text-lg font-bold
                     bg-gradient-to-r from-cyan-500 to-purple-600
                     shadow-2xl shadow-cyan-500/30"
        >
          🚀 Get Started
        </motion.button>
      </section>
    </div>
  );
}
