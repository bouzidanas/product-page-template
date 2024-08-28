import { createContext } from "react";

export const PageContext = createContext<PageProps>({});

interface PageProps {
    vertical?: boolean;
    light?: boolean;
    dark?: boolean;
    centerText?: boolean;
    height?: "full" | "fit" | string | number;
    maxHeight?: "full" | string | number;
    maxWidth?: "full" | string | number;
    gap?: "none" | "small" | "medium" | "large" | string | number;
    padding?: "none" | "small" | "medium" | "large" | string | number;
    scrollTop?: string | number;
    scrollBottom?: string | number;
    fontScale?: number;
    bgColor?: number | string | [string | number, string | number] | [string, string | number, string | number];
    bgColorSet?: string[];
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNode[];
}

const Page = ({ height = "fit", gap = "1.3rem", padding = "0", bgColor = "transparent", vertical, light, dark, bgColorSet, centerText, maxHeight, maxWidth, scrollTop, scrollBottom, fontScale, className, style, children } : PageProps) => {
    return (
        <PageContext.Provider value={{ height, vertical, light, dark, centerText, maxHeight, maxWidth, gap, padding, scrollTop, scrollBottom, fontScale, bgColor, bgColorSet, className, style }}>
            {children}
        </PageContext.Provider>
    )
}

export default Page;