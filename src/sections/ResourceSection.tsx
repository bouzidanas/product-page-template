import { PageSection, SubSection } from '../components';
import { useIsMobileWidth } from '../hooks';

const ResourcesSection = () => {
    const isNarrorView = useIsMobileWidth(1206);
  
    return (
      <PageSection vertical light centerText id='resources' maxWidth="1120px" bgColor="#e6eef2" padding={isNarrorView ? "2rem 0 0 0" : "2rem 0"} gap="0.75rem" style={{padding: isNarrorView ? "45px 0 0 0" : "45px 0 20px 0"}}>
        <h5 style={{color: "var(--secondary-dark-color)"}}>LEARN FROM OUT EXPERTS</h5>
        <h2>Whats new at Streamlit?</h2>
        <SubSection horizontal style={{width: "min(1400px, 90vw)", padding: "20px 0 0 0", flexWrap: "wrap", gap: "1.5rem", alignItems: "end"}}>
          <SubSection vertical style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
            <div style={{display: "flex", alignItems: "end", justifyContent: "center"}}>
              <img src="./imgs/analysis.png" alt="placeholder" style={{width: "100%", height: "auto", transform: "rotate3d(1, 0, 0, 58deg)", marginBottom: "-2.5rem"}} />
            </div>
            <div style={{display: "flex", flexDirection: "column", height: "250px", justifyContent: "start"}}>
              <p style={{fontWeight: 300, fontSize: "85%", marginBottom: "8px"}}>EBOOK</p>
              <h4 style={{fontWeight: "500"}}>The finance app insights report</h4>
              <p>Propel your finance app UA to new heights with data, insights, and expert analysis. Deep-dive into the fastest-growing regions and verticals in the industry.</p>
            </div>
          </SubSection>
          <SubSection vertical style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
            <div style={{display: "flex", alignItems: "end", justifyContent: "center"}}>
              <img src="./imgs/web-dev.png" alt="placeholder" style={{width: "100%", height: "auto", maxHeight: "100%"}} />
            </div>
            <div style={{display: "flex", flexDirection: "column", height: "250px", justifyContent: "start"}}>
              <p style={{fontWeight: 300, fontSize: "85%", marginBottom: "8px"}}>ARTICLE</p>
              <h4 style={{fontWeight: "500"}}>Just build it</h4>
              <p>We don’t want anything to distract you from forward progress. We try our hardest to provide a framework that abstracts away all sorts of engineering details so you can focus on putting the power of data at the fingertips of your stakeholders.</p>
            </div>
          </SubSection>
          <SubSection vertical style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
            <div style={{display: "flex", alignItems: "end", justifyContent: "center"}}>
              <img src="./imgs/mobile.png" alt="placeholder" style={{width: "100%", height: "auto"}} />
            </div>
            <div style={{display: "flex", flexDirection: "column", height: "250px", justifyContent: "start"}}>
              <p style={{fontWeight: 300, fontSize: "85%", marginBottom: "8px"}}>EBOOK</p>
              <h4 style={{fontWeight: "500"}}>Mobile app trends: 2024 edition</h4>
              <p>Get special access to exclusive, actionable data and expert insights on personalization and AI. Learn about exciting, emerging mobile technologies. Get the keys to supercharge your app's growth.</p>
            </div>
          </SubSection>
        </SubSection>
      </PageSection>
    )
  }

export default ResourcesSection;