import axios from "axios";
import { useEffect, useState } from "react";

const SideDetails = ({ detailID, setShowDetails }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    setDetails(null);

    const options = {
      method: "GET",
      url: "https://flight-radar1.p.rapidapi.com/flights/detail",
      params: { flight: detailID },
      headers: {
        "X-RapidAPI-Key": "370cae1365msh6cd6ad328d93bdcp193545jsn35ebee6c9df4",
        "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
      },
    };

    axios.request(options).then((res) => setDetails(res.data));
  }, [detailID]);
  console.log(details);
  return (
    <div className="detail">
      <div className="detail-inner">
        <p className="close-icon">
          <span onClick={() => setShowDetails(false)}>X</span>
        </p>

        {!details ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>{details?.aircraft?.model?.text}</h2>
            <p>{details?.aircraft?.model?.code}</p>
            <p>Company: {details?.airline?.short}</p>
            <img src={details?.aircraft?.images?.large[0]?.src} />

            <p>
              Departure: &nbsp;
              <a target="blank" href={details?.airport?.origin?.website}>
                {details?.airport?.origin?.name}
              </a>
            </p>

            <p>
              Destination: &nbsp;
              <a target="blank" href={details?.airport?.destination?.website}>
                {details?.airport?.destination?.name}
              </a>
            </p>

            <p>Status: {details?.status?.text}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetails;
