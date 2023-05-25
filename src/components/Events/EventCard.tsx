import React, { useState } from 'react';
import './Event.css';
import { Event } from '../../types';
import Comprar from './ComprarEntrada'

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [comprarElegido, setComprarElegido] = useState(false);

  const elegirComprar = () =>
  {
    setComprarElegido(true);
  }
  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p>Fecha: {event.date}</p>
      <p>Precio: {event.price} </p>
      <p>Cantidad: {event.quantity}</p>
      <p>Lugar: {event.location}</p>
      <p>Latitud: {event.latitude}</p>
      <p>Longitud: {event.longitude}</p>
      <p>Id Evento: {event.event_id}</p>
      {
        ((event.quantity > 0) && (!comprarElegido)) ?
          (<button onClick={elegirComprar}>Comprar</button>)
          : null
      }
      {
        comprarElegido ?
          (<Comprar event={event}/>)
          : null
      }
      <p> ------ ------ ------ ------</p>
      <br />
    </div>
  );
};

export default EventCard;
