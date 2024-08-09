import './PageSection.css';

interface PageSectionProps {
    vertical?: boolean;
    horizontal?: boolean;
    height: "full" | "fit" | string | number;
    maxHeight?: "full" | string | number;
    maxWidth?: "full" | string | number;
    gap?: "none" | "small" | "medium" | "large" | string | number;
    padding?: "none" | "small" | "medium" | "large" | string | number;
    fontScale?: number;
    backgroundColor?: string | [string, string] | [string, string, string];
    mode?: "light" | "dark";
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNode[];
}

const PageSection = ({ height = "fit", gap = "1.3rem", padding = "0", backgroundColor = "transparent", vertical, horizontal, maxWidth, mode, maxHeight, fontScale, style, children } : PageSectionProps) => {

    const outerStyle : React.CSSProperties = {
        minHeight: height === "full" ? "100dvh" : height === "fit" ? "fit-content" : "unset",
        height: typeof height === "number" ? `${height}px` : height !== "full" && height !== "fit" ? height : undefined,
        fontSize: fontScale ? `calc(100% * ${fontScale})` : undefined,
        background: Array.isArray(backgroundColor) ? (backgroundColor.length === 2 ? 'linear-gradient( to bottom,' + backgroundColor[0] + ' 0%, '+ backgroundColor[0] + ' 50%, ' + backgroundColor[1] + ' 50%, ' + backgroundColor[1] + ' 100%)' : (backgroundColor.length === 3 ? 'linear-gradient( to bottom,' + backgroundColor[1] + ' 0%, '+ backgroundColor[1] + ' ' + backgroundColor[0] + ', ' + backgroundColor[2] + ' ' + backgroundColor[0] + ', ' + backgroundColor[2] + ' 100%)' : undefined)) : backgroundColor,
        padding: padding,
    }
    const innerStyle : React.CSSProperties = {
        maxHeight: maxHeight === "full" ? "100%" : maxHeight,
        maxWidth: maxWidth === "full" ? undefined : maxWidth,
        flexDirection: vertical ? "column" : horizontal ? "row" : undefined,
        gap: gap,
        ...style
    }

    return (
        <section className="page__section" style={outerStyle} data-theme={mode}>
            <div className="section__content" style={innerStyle}>
                {children}
            </div>
        </section>
    )
}

export default PageSection;