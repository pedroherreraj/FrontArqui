import React from "react";
import Eventcard from "../components/Events/EventCard";
import events from "../data/events";
import "./Home.css";
import { Event } from "../types";
import { useUser } from "../context/userContext";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const { user } = useUser();
    if ( user ) {
        return (
            <div className="home">
                <h2>Bienvenido a Ticket Seller!</h2>
                    <div className="home-card">
                        <h3>Mira lo eventos disponibles y el estado de tus solicitudes</h3>
                        <Link to="/events">Ver eventos disponibles</Link>
                        <Link to="/requests">Ver estado de solicitudes</Link>
                    </div>
            </div>
        );
    }
    else {
        return (
            <div className="home">
                <h2>Bienvenido a Ticket Seller!</h2>
                <div className="home-card">
                    <h3>Ingresa o crea una cuenta para ver los eventos disponibles</h3>
                </div>
        </div>
        );
    }
};

export default Home;
