import './PageSection.css';

interface PageSectionProps {
    vertical?: boolean;
    light?: boolean;
    dark?: boolean;
    centerText?: boolean;
    height?: "full" | "fit" | string | number;
    maxHeight?: "full" | string | number;
    maxWidth?: "full" | string | number;
    gap?: "none" | "small" | "medium" | "large" | string | number;
    padding?: "none" | "small" | "medium" | "large" | string | number;
    fontScale?: number;
    bgColor?: string | [string, string] | [string, string, string];
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    children?: React.ReactNode | React.ReactNode[];
}

const PageSection = ({ height = "fit", gap = "1.3rem", padding = "0", bgColor = "transparent", vertical, light, dark, centerText, maxWidth, maxHeight, fontScale, className, style, id, children } : PageSectionProps) => {

    const outerStyle : React.CSSProperties = {
        minHeight: height === "full" ? "100dvh" : height === "fit" ? "fit-content" : "unset",
        height: typeof height === "number" ? `${height}px` : height !== "full" && height !== "fit" ? height : undefined,
        fontSize: fontScale ? `calc(100% * ${fontScale})` : undefined,
        background: Array.isArray(bgColor) ? (bgColor.length === 2 ? 'linear-gradient( to bottom,' + bgColor[0] + ' 0%, '+ bgColor[0] + ' 50%, ' + bgColor[1] + ' 50%, ' + bgColor[1] + ' 100%)' : (bgColor.length === 3 ? 'linear-gradient( to bottom,' + bgColor[1] + ' 0%, '+ bgColor[1] + ' ' + bgColor[0] + ', ' + bgColor[2] + ' ' + bgColor[0] + ', ' + bgColor[2] + ' 100%)' : undefined)) : bgColor,
        padding: padding,
    }
    const innerStyle : React.CSSProperties = {
        maxHeight: maxHeight === "full" ? "100%" : maxHeight,
        maxWidth: maxWidth === "full" ? undefined : maxWidth,
        flexDirection: vertical ? "column" : undefined,
        gap: gap,
        textAlign: centerText ? "center" : undefined,
        ...style
    }

    return (
        <section id={id} className={"page__section " + (className??"")} style={outerStyle} data-theme={light ? "light" : dark ? "dark" : undefined}>
            <div className="section__content" style={innerStyle}>
                {children}
            </div>
        </section>
    )
}

export default PageSection;