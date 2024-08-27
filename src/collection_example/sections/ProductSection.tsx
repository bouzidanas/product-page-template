import { HiOutlineCheckCircle } from "react-icons/hi2";
import { PageSection, SubSection } from '../../components';


const CheckItem = ({title, description}: {title: string, description: string}) => {
    return (
        <SubSection horizontal style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "1rem", alignItems: "start", justifyContent: "left"}}>
            <HiOutlineCheckCircle color='#ff5454' size={80} style={{marginLeft: "-0.2em", marginTop: "-1.3rem"}}/>
            <SubSection vertical style={{textAlign: "left", gap: "0.6rem"}}>
                <h4>{title}</h4>
                <p>{description}</p>
            </SubSection>
        </SubSection>
    )
}

const ProductSection = () => {
    return (
        <PageSection id="products" bgColor={5} padding="5rem 0" >
            <SubSection horizontal style={{width: "100%", padding: "20px 0", flexWrap: "wrap-reverse", gap: "2.6rem"}}>
                <SubSection vertical style={{flex: "2 0 350px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", textAlign: "left", gap: "0.3rem"}}>
                    <SubSection horizontal style={{gap: "0.6rem", alignItems: "center", marginBottom: "1rem", justifyContent: "left"}}>
                        <img src="./streamlit-logo.svg" alt="Streamlit" style={{width: "38px", height: "auto"}}/>
                        <h4>Streamlit</h4>
                    </SubSection>
                    <h2>Build powerful apps</h2>
                    <p>A faster way to build and share data apps.</p>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "left", alignItems: "center", padding: "2rem 0 0.75rem 0"}}>
                        <button className="App__top btn-primary">Explore Streamlit</button>
                    </div>
                </SubSection>
                <SubSection horizontal style={{width: "calc(670px - 2rem)"}}>
                    <video src="./videos/streamlit.mp4" controls style={{width: "100%", height: "auto", borderRadius: "1rem"}} />
                </SubSection>
            </SubSection>
            <SubSection horizontal style={{padding: "20px 0", flexWrap: "wrap", gap: "1.5rem", alignItems: "start"}}>
                <CheckItem title="Embrace scripting" description="Build an app in a few lines of code with our magically simple API." />
                <CheckItem title="Embrace scripting" description="Build an app in a few lines of code with our magically simple API." />
                <CheckItem title="Embrace scripting" description="Build an app in a few lines of code with our magically simple API." />
            </SubSection>
        </PageSection>
    )
}

export default ProductSection;