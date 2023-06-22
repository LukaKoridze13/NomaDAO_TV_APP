// same as useKeyHandlerEffect but has a condition if it should be added or not
import { useEffect } from "react";
import useKeyHandler from "./useKeyHandler";

function useConditionalHandler(handlerFunction, condition) {
  const keyHandlers = useKeyHandler;
  useEffect(() => {
    condition && keyHandlers(handlerFunction, true);
    return () => {
      keyHandlers(handlerFunction, false);
    };
  });
}

export default useConditionalHandler;
