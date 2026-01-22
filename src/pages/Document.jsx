import { useParams } from "react-router-dom";
import Editor from "../components/Editor";

export default function Document() {
  const { id } = useParams();
  return <Editor docId={id} />;
}
