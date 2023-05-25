import  React, { useState, useEffect } from "react";
import { Request } from "../../types"
import axios from "axios";
import RequestsIndex from "../../components/Resquests/Requests";
// import { useUser } from "context/UserContext";

const token = "ya29.a0AWY7Ckkb-zh8daegaSuLTCt740V5bNKwSdoP9KVovbkghQo_BNHrNSndwpTXsrNGWkltdxrFNm2JdDz-UWztrNClUljlFpIcl8PZ_JFDwpppTBP6StfmrXoiO1Jn2Zdrvi53FEjKX3qVX1UrhV26Ge68Fk6e3AaCgYKAdwSARESFQG1tDrpIiJS8okvEq9F5bStt4uT0g0165";

const Requests: React.FC = () => {

  const [requests, setRequests] = useState<Request[]>([]);
//   const { user } = useUser();

  const getRequests = async () => {
    await axios.get(`https://api.pdesolmi.me/requests`, {
    //   headers: { JwtToken: user?.token },
      headers: { JwtToken: token },
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
    <div className="content-layout">
      <h1 id="page-title" className="content__title">
        Requests
      </h1>
      <div className="content__body">
        <RequestsIndex requests={requests} />
      </div>
    </div>
  );
};

export default Requests;