import React from "react";
import { useState, useEffect } from 'react';
import EventCard from "./EventCard";
import { Event } from "../../types";
import { Link } from "react-router-dom";


interface ComponentProps {
  events: Event[];
}
export default function Events({ events }: ComponentProps)
{
  return (
    <div>
      <div>
        <h4>Eventos:</h4>
        <ul>
          {events.map(
            (event, i) => (
              <div key={i}>
                <Link to={`/events/${event.event_id}`}>
                  {event.name}
                </Link>
              </div>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
