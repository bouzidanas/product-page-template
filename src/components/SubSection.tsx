//Desc: SubSection component for the content section of the page.
//      Basically sets up section as flexbox with basic configuration for the content section.
//      This is done by setting the class of the section to "content__cont" and adding the "hor" or "vert" class if the horizontal or vertical prop is true.
//      The children of the component are rendered inside the section.
//Params:
//      horizontal - boolean value that determines if the section should be horizontal
//      vertical - boolean value that determines if the section should be vertical
//      style - CSSProperties object that contains the style for the section
//      className - string that contains the class name for the section
//      children - ReactNode or ReactNode[] that contains the children of the section
//Return:
//      <section> JSX.Element

import './css/SubSection.css';

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