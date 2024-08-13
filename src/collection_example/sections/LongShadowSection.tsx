import { useEffect, useRef, useState } from 'react';
import { PageSection } from '../../components';

// hook for when window resizes
const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return windowSize;
}

const updateShadow = (x: number, y: number, el: HTMLElement, color="#00000011") => {
    let shadow = '';

    // pathagorean theorem
    const distance = Math.hypot(x, y);

    for(let i = 0; i < distance; i++) {
        shadow += (shadow ? ',' : '') + `${-1*i * x / 500}px ${-1*i * y / 500}px 0 ${color}`;
    }

    el.style.textShadow = shadow;
}


const LongShadowSection = () => {
    const windowSize = useWindowResize();
    const pageSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!pageSectionRef.current) return;

        const clientRect = pageSectionRef.current.getBoundingClientRect();

        const handleMouseMove = (e: MouseEvent) => {
            updateShadow(e.clientX - 0.5*clientRect.width, e.clientY - 0.5*clientRect.height, pageSectionRef.current as HTMLElement, "#a04b45");
        }
        
        // add event listeners to track mouse movement over PageSection (mouse enter, mouse move, mouse leave)
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [windowSize]);

    return (
        <PageSection ref={pageSectionRef} className="long-shadow" bgColor={1} padding="14.5rem 0 14.5rem 0" style={{fontSize: "5vw"}}>
            F.ront E.nd Ex.periments
        </PageSection>
    )
}

export default LongShadowSection;