import { useState, useEffect } from "react";

const API_URL = 'https://api.spacexdata.com/v3';

export function getAllLaunches() {
  const [ launches, setLaunches ] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/launches`)
      .then((response) => response.json())
      .then((data) => setLaunches(data))
      .catch((error) => console.log(error));
  }, [])

  return { launches }
};

export function getLaunchByFlightNumber(flightNumber) {
  fetch(`${API_URL}/launches/${flightNumber}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log('error'));
}