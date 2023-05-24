import React from 'react';
import './Event.css';

interface Event {
  name: string;
  date: string;
  price: number;
  quantity: number;
}
interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Price: {event.price} </p>
      <p>Quantity: {event.quantity}</p>
    </div>
  );
};

export default EventCard;
