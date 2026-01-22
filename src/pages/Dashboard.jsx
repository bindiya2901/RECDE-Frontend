import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Dashboard() {
  const navigate = useNavigate();

  const createDoc = () => {
    navigate(`/doc/${uuid()}`);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>RECDE Dashboard</h1>
      <button onClick={createDoc}>➕ New Document</button>
    </div>
  );
}
