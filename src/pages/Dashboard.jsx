import DocumentCard from "../components/DocumentCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="pt-32 px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <DocumentCard
        title="New Document"
        onOpen={() => navigate(`/doc/${crypto.randomUUID()}`)}
      />
    </div>
  );
}
