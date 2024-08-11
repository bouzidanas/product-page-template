import './SubSection.css';

interface SubSectionProps {
    horizontal?: boolean;
    vertical?: boolean;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
}

const SubSection = ({ horizontal, vertical, style, className, children } : SubSectionProps) => {

    const classString = "content__cont " + (horizontal ? "hor " : vertical ? "vert " : "");

    return (
        <section className={classString + (className??"")} style={style}>
            {children}
        </section>
    )
}

export default SubSection;