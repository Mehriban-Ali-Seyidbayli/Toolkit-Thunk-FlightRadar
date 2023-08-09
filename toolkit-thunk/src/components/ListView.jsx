import { useState } from "react";
import { useSelector } from "react-redux";
import SideDetails from "./SideDetails";

const ListView = () => {
  const state = useSelector((store) => store.reducer);

  const [detailID, setDetailID] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = (id) => {
    setDetailID(id);
    setShowDetail(true);
  };

  return (
    <div className="p-4 ">
      <h2>{state.flights.length} planes found</h2>
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Latitude</td>
            <td>Longitude</td>
            <td>Actions</td>
          </tr>
        </thead>

        <tbody>
          {state.flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => handleClick(flight.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDetail && (
        <SideDetails detailID={detailID} setShowDetails={setShowDetail} />
      )}
    </div>
  );
};

export default ListView;
