import  React, { useState, useEffect } from "react";
import Requests from "./Requests";
import { Request } from "../../types";
import Pagination from "../Pagination/Pagination";
interface ComponentProps {
  requests: Request[];
  pagination: {
    pages: number;
    current: number;
    onChange: (page: number) => void;
  };
}

export default function PaginateRequests({ requests, pagination }: ComponentProps)
{
  console.log(requests)
  return (
    <div>
      <Requests requests={requests} />
      <Pagination {...pagination} />
    </div>
  );
}