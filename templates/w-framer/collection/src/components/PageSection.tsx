// Desc: This component is used to create a (vertically stacked) section of the product landing page with a background color, padding, and gap between children.
// Params:
//      vertical - boolean value that determines if the children of the section should be vertically stacked
//      light - boolean value that determines if the section should have a light theme
//      dark - boolean value that determines if the section should have a dark theme
//      centerText - boolean value that horizontally centers the text of the section
//      height - string or number that determines the height of the section. Combines minHeight and height CSS properties.
//      maxHeight - string or number that determines the max height of the section contents (not the section itself)
//      maxWidth - string or number that determines the max width of the section contents (not the section itself).
//                 Note that the section width is always 100% (i.e. the width of the parent container)
//      gap - string or number that determines the gap between children
//      padding - string or number that determines the padding of the section
//      fontScale - number that determines the font scale of the section
//      bgColor - string, [string, string], or [string, string, string] that determines the background color of the section.
//                An array of two strings creates a background of two colors with the top half is the color of the first string and the bottom half is the color of the second string.
//                An array of three strings creates a background of two colors where the first string determines the percentage of the background that is the color of the second string and the third string determines the color of the remaining portion of the background.
//      className - string that determines the class name of the section
//      style - CSSProperties object that determines the style of the section contents (not the section itself)
//      id - string that determines the id of the section
//      children - ReactNode or ReactNode[] that determines the children of the section
// Return:
//      <section> JSX.Element
// ................................................................................................................
//
// Intention: The idea here is to create a component that has common landing page section structure built-in with the most common configuration options available as props.
//            The props mostly configure the outter structure of the section and some inner section structure. The `style` prop allows for styling the container nearest to the contents (i.e. children).
// Notes: 
// - Only one of `light` or `dark` can be true at a time. If both are true, `light` will take precedence.
// - The `fontScale` prop is used to scale the font size of the section. It is a multiplier that scales the font size of the section.
// - The `padding` prop is used to set the padding of the section not the padding of the section contents. The padding of the section contents can be set via the `style` prop.
// 
// Tips:
// - A common desirable behavior is to have a section not exceed a maximum width except when the window becomes smaller than this width.
//   In this case, the section should shrink to fit a portion of the window.
//   There are three ways to achieve this:
//     1. Set `maxWidth` prop to min([MAX], [PORTION]) where [MAX] is the maximum width and [PORTION] is the portion of the window width that the section should not exceed.
//     2. Set `maxWidth` prop to [MAX] and set horizontal padding of the section (via `padding` prop) or section contents (via `padding` in `style` prop) to a none-zero value.
//     3. Do 1 or 2 but set the `maxWidth` of the section contents (via `maxWidth` in `style` prop) instead.
// - In addition, some cases call for a section content expanding to the width allowed even when the content is smaller than the maximum width.
//   This can be achieved by setting the `width` prop in the `style` prop to "100%" and making sure to do the same for all inner containers that you want expanded as well.

import { forwardRef, useContext } from 'react';
import { PageContext } from './Page';
import './css/PageSection.css';

interface PageSectionProps {
    vertical?: boolean;
    light?: boolean;
    dark?: boolean;
    centerText?: boolean;
    clip?: boolean;
    height?: "full" | "fit" | string | number;
    maxHeight?: "full" | string | number;
    maxWidth?: "full" | string | number;
    gap?: "none" | "small" | "medium" | "large" | string | number;
    padding?: "none" | "small" | "medium" | "large" | string | number;
    scrollTop?: string | number;
    scrollBottom?: string | number;
    fontScale?: number;
    bgColor?: number | string | [string | number, string | number] | [string, string | number, string | number];
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    children?: React.ReactNode | React.ReactNode[];
}

const PageSection = forwardRef<HTMLDivElement, PageSectionProps>(({ height, gap, padding, bgColor, scrollBottom, scrollTop, vertical, light, dark, centerText, clip, maxWidth, maxHeight, fontScale, className, style, id, children } : PageSectionProps, ref) => {

    const pageContext = useContext(PageContext);

    // Use prop values if they exist, otherwise use the values from the context
    if (Object.keys(pageContext).length !== 0) {
        height = height ?? pageContext.height;
        gap = gap ?? pageContext.gap;
        padding = padding ?? pageContext.padding;
        bgColor = bgColor ?? pageContext.bgColor;
        scrollBottom = scrollBottom ?? pageContext.scrollBottom;
        scrollTop = scrollTop ?? pageContext.scrollTop;
        vertical = vertical ?? pageContext.vertical;
        light = light ?? pageContext.light;
        dark = dark ?? pageContext.dark;
        centerText = centerText ?? pageContext.centerText;
        maxWidth = maxWidth ?? pageContext.maxWidth;
        maxHeight = maxHeight ?? pageContext.maxHeight;
        fontScale = fontScale ?? pageContext.fontScale;
        className = className ?? pageContext.className;
        style = style ?? pageContext.style;
    }
    const pageClassName = pageContext.className ?? "";
    const pageStyle = pageContext.style ?? {};

    if (typeof(bgColor) === "number") {
        bgColor = pageContext.bgColorSet ? pageContext.bgColorSet[bgColor] : undefined;
    }
    else if (Array.isArray(bgColor)) {
        bgColor = bgColor.map((color) => typeof(color) === "number" ? (pageContext.bgColorSet ? pageContext.bgColorSet[color] : "undefined") : color) as [string, string] | [string, string, string];
        if (bgColor.includes("undefined")) {
            bgColor = undefined;
        }
    }
    
    // Set default values if they are still undefined
    height = height ?? "fit";
    gap = gap ?? "1.3rem";
    padding = padding ?? "0";
    bgColor = bgColor ?? "transparent";

    const outerStyle : React.CSSProperties = {
        minHeight: height === "full" ? "100dvh" : height === "fit" ? "fit-content" : "unset",
        height: typeof height === "number" ? `${height}px` : height !== "full" && height !== "fit" ? height : undefined,
        fontSize: fontScale ? `calc(100% * ${fontScale})` : undefined,
        background: Array.isArray(bgColor) ? (bgColor.length === 2 ? 'linear-gradient( to bottom,' + bgColor[0] + ' 0%, '+ bgColor[0] + ' 50%, ' + bgColor[1] + ' 50%, ' + bgColor[1] + ' 100%)' : (bgColor.length === 3 ? 'linear-gradient( to bottom,' + bgColor[1] + ' 0%, '+ bgColor[1] + ' ' + bgColor[0] + ', ' + bgColor[2] + ' ' + bgColor[0] + ', ' + bgColor[2] + ' 100%)' : undefined)) : bgColor,
        padding: padding,
        scrollMarginTop: scrollTop,
        scrollMarginBottom: scrollBottom,
        overflow: clip ? "hidden" : undefined
    }
    const innerStyle : React.CSSProperties = {
        maxHeight: maxHeight === "full" ? "100%" : maxHeight,
        maxWidth: maxWidth === "full" ? undefined : maxWidth,
        flexDirection: vertical ? "column" : undefined,
        gap: gap,
        textAlign: centerText ? "center" : undefined,
        ...style,
        ...pageStyle
    }

    return (
        <section id={id} ref={ref} className={"page__section " + pageClassName + " " + (className??"")} style={outerStyle} data-theme={light ? "light" : dark ? "dark" : undefined}>
            <div className="section__content" style={innerStyle}>
                {children}
            </div>
        </section>
    )
})

export default PageSection;