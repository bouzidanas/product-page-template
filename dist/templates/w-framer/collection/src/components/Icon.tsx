import { HTMLProps, CSSProperties } from "react";


export default function Icon({name, type="svg", size=12, style, ...props}:{name: string, type?: string, size?: number, style?: CSSProperties} & HTMLProps<HTMLImageElement>) {
    
    // return img element that fits svg icon to its set size
    return (
        <img 
            src={"./icons/" + name + "." + type.toLowerCase()}  
            style={{display: "flex", justifyContent: "center", alignItems: "center", width: size, height: size, objectFit: "contain", ...style}}
            {...props}
        />
    )
}