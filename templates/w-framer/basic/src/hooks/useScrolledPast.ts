// Desc: Custom hook to determine if the user has scrolled past a certain point on the page
// Params: y - the y-coordinate that the user must scroll past to trigger the hook
//         initial - the initial value of the hook
// Returns: scrolledPast - a boolean value that is true if the user has scrolled past the y-coordinate

import { useEffect, useState } from "react";


export const useScrolledPast = (y: number, initial=false) => {
    const [scrolledPast, setScrolledPast] = useState(initial);


  useEffect(() => {
    const handleScroll = () => {
        setScrolledPast(window.scrollY > y);
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

    return scrolledPast;
}