import axios from "axios";
import  React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Event } from "../../types"
import EventCard from "../../components/Events/EventCard";
import { useUser } from "../../context/userContext";

const EventDetail: React.FC = () => {
    const [event, setEvent] = useState<Event>();
  const { user } = useUser();
    const { eventId } = useParams<{eventId: string}>();
  
  const getEvent = async (id: string) => {
    await axios.get(`https://tt0aj0brb0.execute-api.us-east-2.amazonaws.com/prod/events/${id}`, {
      headers: { JwtToken: user?.token },
    }).then((response) => {
      console.log(response);
      setEvent(response.data)
    });
  };

  useEffect(() => {
    eventId && getEvent(eventId);
  }, [eventId]);

  if (!event) return <h1> Loading</h1>;
  return (
    <EventCard event={event}/>
  )
}

export default EventDetail;