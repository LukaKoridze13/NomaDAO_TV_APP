// The useKeyHandlersEffect hook will take care of setting up the keyup event listener when the component mounts and removing it when the component unmounts. It provides a cleaner and more reusable way to manage key handlers in your React components.

// By using this hook, you can:

// Avoid duplicating the useEffect code for setting up and cleaning up key handlers in multiple components.
// Encapsulate the key handler logic within the individual components where they are needed.
// Maintain a consistent and standardized approach to managing key handlers across your application.
// Easily enable or disable key handlers by passing true or false as the second parameter to the useKeyHandlersEffect hook.
// Overall, the useKeyHandlersEffect hook simplifies the management of key handlers in React components, improving code organization and reducing redundancy.

import { useEffect } from "react";
import useKeyHandler from "./useKeyHandler";

function useKeyHandlerEffect(handlerFunction) {
  const keyHandlers = useKeyHandler;

  useEffect(() => {
    keyHandlers(handlerFunction, true);

    return () => {
      keyHandlers(handlerFunction, false);
    };
  });
}

export default useKeyHandlerEffect;
