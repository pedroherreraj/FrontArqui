import * as React from "react";
import { useState, useEffect } from 'react';
import { Event } from '../../types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useUser } from '../../context/UserContext';

interface ComponentProps {
  event: Event;
}
export default function Comprar({ event }: ComponentProps)
{
    const [cantidad, setCantidad] = useState(0);
    const [comprado, setComprado] = useState(false);
    const router = useNavigate();
//   const { user } = useUser();
    const token = "ya29.a0AWY7Ckkb-zh8daegaSuLTCt740V5bNKwSdoP9KVovbkghQo_BNHrNSndwpTXsrNGWkltdxrFNm2JdDz-UWztrNClUljlFpIcl8PZ_JFDwpppTBP6StfmrXoiO1Jn2Zdrvi53FEjKX3qVX1UrhV26Ge68Fk6e3AaCgYKAdwSARESFQG1tDrpIiJS8okvEq9F5bStt4uT0g0165";

    const aumentar = () => {
        if (cantidad < event.quantity)
        setCantidad(cantidad + 1);
    }
    const disminuir = () => {
        if (cantidad > 0)
        setCantidad(cantidad - 1);
    }

    const comprar = async () => {
        if (cantidad > 0)
        {
        alert("se compran " + (cantidad).toString() + " entradas para evento: " + event.name);
        setComprado(true);
        const requestData = {
            quantity: cantidad,
            event_id: event.event_id
        };

        const config = {
            headers: {
            'Content-Type': 'application/json',
            // JwtToken: user?.token
            JwtToken: token
            }
        };
        response = await axios.post(`https://api.pdesolmi.me/requests`, requestData, config)
        .then((response) => {
            console.log(response);
        });
        router("/requests");

        }
        else
        alert("No se compra nada");
    }

  return (
    <div>
      {
        !comprado ?
          (
            <div>
              <p>Cantidad:</p>
              <div>
                <button  onClick={disminuir}>
                  &mdash;
                </button>
                <input type="text" value={cantidad} readOnly/>
                <button  onClick={aumentar}>
                  &#xff0b;
                </button>
              </div>
              <button onClick={comprar}>COMPRAR</button>
            </div>
          )
        :
          (
            <p>Entrada comprada</p>
          )

      }
    </div>
  );
}
