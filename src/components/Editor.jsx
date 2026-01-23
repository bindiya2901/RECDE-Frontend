import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function Editor({ docId }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    socket.emit("join-document", docId);

    socket.on("receive-changes", data => {
      setContent(data || "");
    });

    return () => {
      socket.off("receive-changes");
    };
  }, [docId]);

  useEffect(() => {
    const handleMove = e => {
      socket.emit("cursor-move", {
        docId,
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMove);

    socket.on("cursor-update", () => {
      // you can render cursor dots later
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      socket.off("cursor-update");
    };
  }, [docId]);

  const handleChange = e => {
    setContent(e.target.value);
    socket.emit("send-changes", { docId, content: e.target.value });
  };

  return (
    <div
      className="min-h-screen p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-black"
    >
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Start typing…"
        className="w-full h-[90vh] rounded-2xl p-8 text-lg
                   bg-black/40 backdrop-blur-xl
                   border border-white/10
                   text-white outline-none resize-none
                   focus:ring-2 focus:ring-cyan-400
                   shadow-xl"
      />
    </div>
  );
}
