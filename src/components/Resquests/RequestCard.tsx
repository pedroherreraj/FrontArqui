import React from "react";
import { useState, useEffect } from 'react';
import { Request } from "../../types";

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
    <li>
      <h1 style={{color: "red"}}>{request.event?.name}</h1>
      <div>
        <p>Cantidad: {request.quantity}</p>
        <p>Estado: {handleStatus(request.status)}</p>
      </div>
    </li>
  );
}
