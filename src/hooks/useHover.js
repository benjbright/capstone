import { useState, useEffect, useRef } from "react";

function useHover() {
  // Main block of functional component - can define a Ref here
  // Side effects associated with the Ref must be defined
  // in the component 'commit' phase - includes event listeners

  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    // ref.current is mutable - by the time the cleanup function
    // runs it may have been set to null
    // Capture any mutable values inside the effect
    const instance = ref.current;

    instance.addEventListener("mouseenter", enter);
    instance.addEventListener("mouseleave", leave);

    // Needs a 'clean up' function when the component unmounts
    // Note use of the 'instance' variable as explained above
    return () => {
      instance.removeEventListener("mouseenter", enter);
      instance.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [hovered, ref];
}

export default useHover;
