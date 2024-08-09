import './PageSection.css';

interface PageSectionProps {
    height: "full" | "fit" | string | number;
    maxHeight?: "full" | string | number;
    maxWidth?: "full" | string | number;
    gap?: "none" | "small" | "medium" | "large" | string | number;
    padding?: "none" | "small" | "medium" | "large" | string | number;
    fontScale?: number;
    stack?: "vertical" | "horizontal";
    backgroundColor?: string | [string, string] | [string, string, string];
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNode[];
}

const PageSection = ({ height = "fit", maxWidth = 1000, gap = "1.3rem", padding = "3rem", backgroundColor = "transparent", stack="vertical", maxHeight, fontScale, style, children } : PageSectionProps) => {

    const outerStyle : React.CSSProperties = {
        minHeight: height === "full" ? "100dvh" : height === "fit" ? "fit-content" : "unset",
        height: typeof height === "number" ? `${height}px` : height !== "full" && height !== "fit" ? height : undefined,
        fontSize: fontScale ? `calc(100% * ${fontScale})` : undefined,
        backgroundColor: Array.isArray(backgroundColor) ? (backgroundColor.length === 2 ? backgroundColor[1] : backgroundColor[2]) : backgroundColor,
        padding: padding,
    }
    const innerStyle : React.CSSProperties = {
        maxHeight: maxHeight === "full" ? "100%" : maxHeight,
        maxWidth: maxWidth === "full" ? "100%" : maxWidth,
        flexDirection: stack === "vertical" ? "column" : stack === "horizontal" ? "row" : undefined,
        gap: gap,
        ...style
    }

    const backgroundStyle : React.CSSProperties = {
        position: "relative", 
        top: "0", 
        left: "0", 
        background: Array.isArray(backgroundColor) ? (backgroundColor!.length === 2 ? backgroundColor[0] : backgroundColor[1]) : backgroundColor, 
        height: Array.isArray(backgroundColor) ? (backgroundColor!.length === 2 ? "50%" : backgroundColor[0]) : "100%", 
        width: "100%"
    }

    return (
        <section className="page__section" style={outerStyle}>
            {Array.isArray(backgroundColor)
                ? <div className="section__background" style={backgroundStyle}></div>
                : null
            }
            <div className="section__content" style={innerStyle}>
                {children}
            </div>
        </section>
    )
}

export default PageSection;