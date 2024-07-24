import * as React from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

// Custom hook 🪝
import useGeolocation from "../hooks/useGeolocation";

// Component
const Geolocation = () => {
  const globeRef = React.useRef<GlobeMethods | undefined>(undefined);

  // Custom hook 🪝
  const {
    latitude,
    longitude,
    accuracy,
    altitude,
    altitudeAccuracy,
    heading,
    speed,
    error,
    loading, // Destructure the loading state
  } = useGeolocation();

  React.useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    // Set up globe controls
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.1;

    // Centre the globe on the user's location if available
    if (latitude && longitude) {
      globe.pointOfView({
        lat: latitude,
        lng: longitude,
        altitude: 0.5,
      });
    }
  }, [latitude, longitude]);

  // Marker data
  const pointsData =
    latitude && longitude
      ? [{ lat: latitude, lng: longitude, size: 0.1, color: "red" }]
      : [];

  // JSX
  return (
    <>
      <h1>useGeolocation</h1>
      <p className="description">
        Use this hook 🪝 to get the user's geolocation information.
      </p>

      {loading ? (
        <p>Loading geolocation data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>latitude</th>
              <th>longitude</th>
              <th>accuracy</th>
              <th>altitude</th>
              <th>altitudeAccuracy</th>
              <th>heading</th>
              <th>speed</th>
              <th>error</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{latitude ?? "---"}</td>
              <td>{longitude ?? "---"}</td>
              <td>{accuracy ? Math.round(accuracy) : "---"}</td>
              <td>{altitude ?? "---"}</td>
              <td>{altitudeAccuracy ? Math.round(altitudeAccuracy) : "---"}</td>
              <td>{heading ?? "---"}</td>
              <td>{speed ?? "---"}</td>
              <td>{error ?? "---"}</td>
            </tr>
          </tbody>
        </table>
      )}

      <div style={{ height: "300px", width: "100%" }}>
        <Globe
          ref={globeRef}
          backgroundColor="#23272F"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          pointsData={pointsData}
          pointAltitude={0.2}
          pointColor="color"
          pointRadius="size"
          height={300}
          width={400}
        />
      </div>
    </>
  );
};

export default Geolocation;
