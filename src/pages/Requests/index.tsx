import  React, { useState, useEffect } from "react";
import { Request } from "../../types"
import axios from "axios";
import RequestsIndex from "../../components/Resquests/Requests";
import { useUser } from "../../context/userContext";

const Requests: React.FC = () => {

  const [requests, setRequests] = useState<Request[]>([]);
  const { user } = useUser();

  const getRequests = async () => {
    await axios.get(`https://api.pdesolmi.me/requests`, {
      headers: { JwtToken: user?.token },
  }).then((response) => {
      setRequests(response.data);
    }).catch((error) => {
      console.log(error);
      });
  };

  useEffect(() => {
    getRequests();
    console.log("Aca van las request");
    console.log(requests);
  }, []);

  return (
    <div className="request-layout">
      <RequestsIndex requests={requests} />
    </div>
  );
};

export default Requests;