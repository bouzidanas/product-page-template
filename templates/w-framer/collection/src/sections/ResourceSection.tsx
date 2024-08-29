import { PageSection, SubSection } from 'ppc'
import { useIsMobileWidth } from 'ppc'

const Resource = ({img, title, type, description, imgStyle}: {img: string, title: string, type: string, description: string, imgStyle?: React.CSSProperties}) => {
  return (
    <SubSection vertical style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
      <div style={{display: "flex", alignItems: "end", justifyContent: "center"}}>
        <img src={img} alt="placeholder" style={{width: "100%", height: "auto", ...imgStyle}} />
      </div>
      <div style={{display: "flex", flexDirection: "column", height: "250px", justifyContent: "start"}}>
        <p style={{fontWeight: 300, fontSize: "85%", marginBottom: "8px"}}>{type}</p>
        <h4 style={{fontWeight: "500"}}>{title}</h4>
        <p>{description}</p>
      </div>
    </SubSection>
  )
}

const ResourcesSection = () => {
    const isNarrorView = useIsMobileWidth(1206);
  
    return (
      <PageSection light id='resources' bgColor="#e6eef2" padding={isNarrorView ? "2rem 0 0 0" : "2rem 0"} gap="0.75rem" style={{padding: isNarrorView ? "45px 0 0 0" : "45px 0 20px 0"}}>
        <h5 style={{color: "var(--secondary-dark-color)"}}>LEARN FROM OUT EXPERTS</h5>
        <h2>Whats new at Streamlit?</h2>
        <SubSection horizontal style={{width: "100%", padding: "20px 0 0 0", flexWrap: "wrap", gap: "1.5rem", alignItems: "end"}}>
          <Resource img="./imgs/analysis.png" title="The finance app insights report" type="EBOOK" description="Propel your finance app UA to new heights with data, insights, and expert analysis. Deep-dive into the fastest-growing regions and verticals in the industry." imgStyle={{transform: "rotate3d(1, 0, 0, 58deg)", marginBottom: "-2.5rem"}} />
          <Resource img="./imgs/web-dev.png" title="Just build it" type="ARTICLE" description="We don’t want anything to distract you from forward progress. We try our hardest to provide a framework that abstracts away all sorts of engineering details so you can focus on putting the power of data at the fingertips of your stakeholders." />
          <Resource img="./imgs/mobile.png" title="Mobile app trends: 2024 edition" type="EBOOK" description="Get special access to exclusive, actionable data and expert insights on personalization and AI. Learn about exciting, emerging mobile technologies. Get the keys to supercharge your app's growth." />
        </SubSection>
      </PageSection>
    )
  }

export default ResourcesSection;