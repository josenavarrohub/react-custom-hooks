import * as React from "react";

/**
 * `useDocumentTitle` is a custom hook that sets the document title.
 *
 * @param {string} title - The title to be set for the document.
 */
const useDocumentTitle = (title: string) => {
  // It synchronizes the component with the document title
  React.useEffect(() => {
    window.document.title = title;
  }, [title]);
};

export default useDocumentTitle;
