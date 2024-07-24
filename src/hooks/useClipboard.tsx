import * as React from "react";

/**
 * `writeText` is an asynchronous function that attempts to write a given string to the user's clipboard.
 *
 * @param clipboard - The string that will be written to the clipboard.
 */
const writeText = async (clipboard: string) => {
  try {
    await navigator.clipboard.writeText(clipboard);
  } catch (error) {
    console.error((error as Error).message);
  }
};

/**
 * `writeTextFallback` is a fallback function to write a given string to the user's clipboard.
 *
 * @param clipboard - The string that will be written to the clipboard.
 */
const writeTextFallback = (clipboard: string) => {
  const textarea = document.createElement("textarea");
  textarea.value = clipboard;
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
};

/**
 * `useClipboard` is a custom hook that provides an interface for interacting with the user's clipboard.
 * It returns a state variable representing the current clipboard content and a function to update it.

 * @returns {Array} An array containing two elements:
 * - The first element is a state variable (`clipboard`) that holds the current clipboard content.
 * - The second element is a function (`updateClipboard`) that can be used to update the clipboard content.
 */
const useClipboard = (): [null | string, (clipboard: string) => void] => {
  const [clipboard, setClipboard] = React.useState<null | string>(null);

  const updateClipboard = (clipboard: string) => {
    navigator.clipboard ? writeText(clipboard) : writeTextFallback(clipboard);
    setClipboard(clipboard);
  };

  // `updateClipboard` is wrapped in `React.useCallback` to ensure it has a stable identity
  // across re-renders (referential equality). So it can be used as a prop in a memoized
  // component without problems.
  return [clipboard, React.useCallback(updateClipboard, [])];
};

export default useClipboard;
