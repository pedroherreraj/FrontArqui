import React from "react";
import Eventcard from "../components/Events/Event";
import events from "../data/events";
import "./Home.css";

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
