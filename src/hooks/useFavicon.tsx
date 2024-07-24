import * as React from "react";

/**
 * `useFavicon` is a custom hook that allows you to dynamically change the favicon.
 */
const useFavicon = (url: string) => {
  // It synchronizes the component with the document's favicon
  React.useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.append(link);
    }

    link.href = url;
  }, [url]);
};

export default useFavicon;
