// Custom hook that adds or removes a keyup event listener based on a given condition.
// @param {Function} handlerFunction - The function to be executed when a keyup event occurs.
// @param {boolean} shouldUse - Determines whether to add or remove the event listener.
function useKeyHander(handlerFunction, shouldUse) {
  if (shouldUse) {
    document.addEventListener("keyup", handlerFunction);
  } else {
    document.removeEventListener("keyup", handlerFunction);
  }
}

export default useKeyHander;
