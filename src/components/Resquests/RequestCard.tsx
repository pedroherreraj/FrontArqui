import { Request } from "../../types";
import "./Request.css";

interface ComponentProps {
  request: Request;
}

const handleStatus = (status: string) => {

  if (status === "accepted") {
    return "Aprobado"
  } else if (status === "rejected") {
    return "Rechazado"
  } else {
    return "Pendiente"
  }
}

export default function RequestCard({ request }: ComponentProps)
{
  return (
    <div className="request-card">
      <h2>{request.event?.name}</h2>
      <p>Cantidad: {request.quantity}</p>
      <p>Estado: {handleStatus(request.status)}</p>
    </div>
  );
}
