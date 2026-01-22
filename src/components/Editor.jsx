import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { socket } from "../socket";

export default function Editor({ docId }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    socket.emit("join-document", docId);

    socket.on("load-document", data => {
      setContent(data);
    });

    socket.on("receive-changes", data => {
      setContent(data);
    });

    return () => {
      socket.off("load-document");
      socket.off("receive-changes");
    };
  }, [docId]);

  const handleChange = value => {
    setContent(value);
    socket.emit("send-changes", {
      docId,
      content: value
    });
  };

  return (
    <ReactQuill
      theme="snow"
      value={content}
      onChange={handleChange}
      style={{ height: "100vh" }}
    />
  );
}
