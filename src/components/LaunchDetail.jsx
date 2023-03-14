import { useParams } from "react-router-dom";
import { getLaunchByFlightNumber } from "../services/launches";

function LaunchDetails() {

  const { launchId } = useParams();

  const { launch } = getLaunchByFlightNumber(launchId);

  return (
    <div>Hola {JSON.stringify(launch)}</div>
  )
}

export default LaunchDetails;