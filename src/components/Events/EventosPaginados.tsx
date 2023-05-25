import  React, { useState, useEffect } from "react";
import Events from "./Events";
import { Event } from "../../types";
import Pagination from "../Pagination/Pagination";

interface ComponentProps {
  events: Event[];
  pagination: {
    pages: number;
    current: number;
    onChange: (page: number) => void;
  };
}

export default function EventosPaginados({ events, pagination }: ComponentProps)
{
  return (
    <div>
      <Events events={events} />
      <Pagination {...pagination} />
    </div>
  );
}