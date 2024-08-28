import { PageSection } from '../../components';

const IntroSection = () => {
    return (
        <PageSection maxWidth="700px" bgColor="#04182B" padding="6.25rem 0 2rem 0" style={{padding: "40px 0", margin: "0 2rem"}}>
            <h1>Speed up app development</h1>
            <p>Build and deploy data apps faster with Streamlit. Streamlit is the fastest way to build, manage, and share data apps.</p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "1rem 0"}}>
                <button className="App__top btn-primary">Try Streamlit now</button>
                <button className="App__top btn-secondary">Learn more</button>
            </div>
        </PageSection>
    )
}

export default IntroSection;