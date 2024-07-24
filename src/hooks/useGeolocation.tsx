import * as React from "react";

// Types
interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
  error: string | null;
  loading: boolean;
}

/**
 * `useGeolocation` is a custom hook to get the user's geolocation information.
 *
 * @param {GeolocationOptions} options - Optional settings for the geolocation request.
 * @returns {GeolocationState} - The current geolocation state, including latitude, longitude, accuracy, and error.
 */
const useGeolocation = (
  options: GeolocationOptions = {
    enableHighAccuracy: true, // Requests high accuracy.
    timeout: Infinity, // Wait indefinitely for a location response.
    maximumAge: 0, // Do not use cached location data. Always request a fresh location.
  }
): GeolocationState => {
  const [geolocation, setGeolocation] = React.useState<GeolocationState>({
    latitude: null,
    longitude: null,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
    error: null,
	loading: true,
  });
  const optionsRef = React.useRef(options);

  React.useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  React.useEffect(() => {
    // Unsupported API
    if (!navigator.geolocation) {
      setGeolocation((g) => ({
        ...g,
        error: "Geolocation is not supported by this browser.",
		loading: false,
      }));
      return;
    }

    // Watch position
    const successHandler = (position: GeolocationPosition) => {
      const {
        latitude,
        longitude,
        accuracy,
        altitude,
        altitudeAccuracy,
        heading,
        speed,
      } = position.coords;
      setGeolocation({
        latitude,
        longitude,
        accuracy,
        altitude: altitude ?? null,
        altitudeAccuracy: altitudeAccuracy ?? null,
        heading: heading ?? null,
        speed: speed ?? null,
        error: null,
		loading: false,
      });
    };

    const errorHandler = (error: GeolocationPositionError) => {
      setGeolocation((g) => ({
        ...g,
        error: error.message,
		loading: false,
      }));
    };

    const watcherId = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      optionsRef.current
    );

    // Clean-up
    return () => navigator.geolocation.clearWatch(watcherId);
  }, []);

  return geolocation;
};

export default useGeolocation;
