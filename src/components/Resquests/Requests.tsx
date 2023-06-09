import React from "react";
import { useState, useEffect } from 'react';
import RequestCard from "./RequestCard";
import { Request } from "../../types";

interface ComponentProps {
  requests: Request[];
}
export default function Requests({ requests }: ComponentProps)
{
  if (requests && requests.length === 0) {
    return <div>No requests found.</div>;
  }
  return (
    <div>
      <h4>Requests:</h4>
      <div className="requests-grid">
        {requests.map(
          (request: Request, i: number) => (
            <div key={i}>
              <RequestCard request={request} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
