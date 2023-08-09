import { useEffect, useState } from "react";
import MapView from "./components/MapView";
import ListView from "./components/ListView";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { getFlightData } from "./redux/flightSlice";

function App() {
  const [showMap, setShowMap] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlightData());
  }, []);

  return (
    <>
      <Header />
      <div className="view-buttons">
        <button
          className={`${showMap && "active"}`}
          onClick={() => setShowMap(true)}
        >
          Map View
        </button>
        <button
          className={`${!showMap && "active"}`}
          onClick={() => setShowMap(false)}
        >
          List View
        </button>
      </div>

      {showMap ? <MapView /> : <ListView />}
    </>
  );
}

export default App;
