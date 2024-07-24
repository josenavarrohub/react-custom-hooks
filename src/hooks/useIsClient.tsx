import * as React from "react";

/**
 * `useIsClient` is a custom hook to determine if the code is running in a client environment.
 *
 * @returns A boolean indicating if the code is running on the client side.
 */
const useIsClient = () => {
  const [isClient, setIsClient] = React.useState<boolean>(false);

  React.useEffect(() => {
    // When the component mounts, set the `isClient` state to true
    // to indicate that we are in a client environment.
    setIsClient(true);
  }, []);

  return isClient;
};

export default useIsClient;
