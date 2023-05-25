import React from "react";
import Eventcard from "../components/Events/EventCard";
import events from "../data/events";
import "./Home.css";
import { Event } from "../types";

const Home: React.FC = () => {
    return (
        <div className="eventsGrid">
            {events.map((event) => (
                <Eventcard key={event.name} event={event} />
            ))}
        </div>
    );
};

export default Home;
