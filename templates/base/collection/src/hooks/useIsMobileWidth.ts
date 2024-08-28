// Desc: Custom hook to check if the window width is less than or equal to a certain value
// Params: width - the width that the window must be less than or equal to
// Returns: isMobileWidth - a boolean value that is true if the window width is less than or equal to the width
// TODO: Consider changing the name of this hook to useIsLessThanWidth. 
//       Considerations: 
//         1. The delema is that the name isMobileWidth indicates one of the most important use cases for this hook and we want it to be suggestive of that use case. 
//         2. However, the this hook can be used for any width comparison and the name should reflect that.

import { useEffect, useState } from "react";

export const useIsMobileWidth = (width = 800) => {
    const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth <= width);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileWidth(window.innerWidth <= width);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);

    return isMobileWidth;
}