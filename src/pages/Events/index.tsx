import  React, { useState, useEffect } from "react";
import { useMessage } from "../../services/use-message";
import EventosPaginados from "../../components/Events/EventosPaginados";
import { Event } from "../../types";
import axios from "axios";
// import { useUser } from "context/UserContext";

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

const token = "ya29.a0AWY7Ckkb-zh8daegaSuLTCt740V5bNKwSdoP9KVovbkghQo_BNHrNSndwpTXsrNGWkltdxrFNm2JdDz-UWztrNClUljlFpIcl8PZ_JFDwpppTBP6StfmrXoiO1Jn2Zdrvi53FEjKX3qVX1UrhV26Ge68Fk6e3AaCgYKAdwSARESFQG1tDrpIiJS8okvEq9F5bStt4uT0g0165";

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [pagination, setPagination] = useState<Pagination>(defaultPage);
  const [response, setResponse] = useState({} as any);
  // const { user } = useUser();


  const getEvents = async () => {
    try {
      const response = await axios.get(`https://api.pdesolmi.me/events?page=${pagination.current}`, {
        // headers: { JwtToken: user?.token },
        headers: { JwtToken: token },
      });
      console.log(response.data.events);
      setEvents(response.data.events);
      }
    catch (error) {
      console.error(error);
    }
  };

  const getEventsFirstTime = async () => {
    try {
      const response = await axios.get(`https://api.pdesolmi.me/events`, {
        // headers: { JwtToken: user?.token },
        headers: { JwtToken: token },
      });
      setEvents(response.data.events);
      setPagination(response.data.meta);
      setResponse(response);
      console.log("First Time");
      console.log(response.data.events);
    }
    catch (error) {
      console.error(error);
    }
  };


  const changePageEvents = (page: number) => {
    setPagination((pp) => ({ ...pp, current: page }));
  };

  useEffect(() => {
    getEventsFirstTime();
  }, []);

  useEffect(() => {
    if (response) setPagination(response);
  }, [events]);

  useEffect(() => {
    getEvents();
  }, [pagination]);

  return (
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Eventos
      </h1>
      <div className="content__body">
        <EventosPaginados events={events} pagination={{ ...pagination, onChange: changePageEvents }} />
      </div>
    </div>
  );
};

export default Events;
