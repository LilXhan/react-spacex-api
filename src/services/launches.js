import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = 'https://api.spacexdata.com/v3';

export function getAllLaunches() {
  const [ launches, setLaunches ] = useState([]);
  const [ loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/launches`)
      .then((response) => response.json())
      .then((data) => setLaunches(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return { launches, loading }
};

export function getLaunchByFlightNumber(flightNumber) {

  const [ launch, setLaunch ] = useState({})

  useEffect(() => {
    fetch(`${API_URL}/launches/${flightNumber}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => setLaunch(data))
    .catch((error) => console.log(error));
  }, [flightNumber])

  return { launch }
}