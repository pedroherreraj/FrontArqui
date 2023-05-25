import  React, { useState, useEffect } from "react";
import EventosPaginados from "../../components/Events/EventosPaginados";
import { Event } from "../../types"
import axios from "axios";
import { useUser } from "../../context/userContext";

interface Pagination {
  pages: number;
  current: number;
  total: number;
}

const defaultPage: Pagination = {
  pages: 0,
  current: 0,
  total: 0,
};

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [pagination, setPagination] = useState<Pagination>(defaultPage);
  const [response] = useState({} as any);
  const { user } = useUser();


  const getEvents = async () => {
    await axios.get(`https://api.pdesolmi.me/events?page=${pagination.current}`, {
      headers: { JwtToken: user?.token },
    }).then((response) => {
      setEvents(response.data.events);
    });
  };
  
  const getEventsFirstTime = async () => {
    await axios.get(`https://api.pdesolmi.me/events`, {
      headers: { JwtToken: user?.token },
    }).then((response) => {
      setEvents(response.data.events);
      setPagination(response.data.meta);

    });
  };

  const changePageEvents = (page: number) => {
    setPagination((pp) => ({ ...pp, current: page }));
  };

  useEffect(() => {
    getEventsFirstTime();
  }, []);

  // useEffect(() => {
  //   if (response) setPagination(response);
  // }, [events]);

  useEffect(() => {
    getEvents();
  }, [pagination]);

  return (
    <div className="request-layout">
      <div className="content__body">
        <EventosPaginados events={events} pagination={{ ...pagination, onChange: changePageEvents }} />
      </div>
    </div>
  );
};

export default Events;