import { PageSection, SubSection } from '../components';
import { useIsMobileWidth } from '../hooks';

const IncentivesSection = () => {
    const isNarrowView = useIsMobileWidth(1245);
  
    return (
        <PageSection vertical light centerText id="incentives" maxWidth="min(1120px, 90vw)" bgColor="#ffffff" padding="2rem 0" gap="0.75rem" style={{padding: "45px 0"}}>
            <SubSection vertical style={{maxWidth: 800, margin: "0 2rem"}}>
                <h2>Everything you need in one measurement and analytics suite</h2>
                <p style={{fontSize: "21px"}}>Unlock attribution data, optimize ad performance, and leverage the reporting and insights you need to meet business goals and scale efficiently.</p>
            </SubSection>
            <SubSection horizontal style={{padding: "20px 0", flexWrap: "wrap-reverse"}}>
                <SubSection vertical style={{width: "540px", minWidth: "300px", textAlign: isNarrowView ? "center" : "left"}}>
                    <h3>Maximize impact</h3>
                    <p>Don’t just measure data, measure impact. Drive fast results with accurate, real-time measurement data to meet and exceed your KPIs across channels.</p>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: isNarrowView ? "center" : "left", alignItems: "center", padding: isNarrowView ? "1.3rem 0 0 0" : "1.3rem 0"}}>
                        <button className="App__top btn-primary">Learn more</button>
                    </div>
                </SubSection>
                <SubSection horizontal style={{width: "calc(600px - 2rem)"}}>
                    <img src="./imgs/idea-bulb.png" alt="placeholder" style={{width: "340px", height: "auto", marginLeft: "1rem"}} />
                </SubSection>
            </SubSection>
            <SubSection horizontal style={{padding: "20px 0", flexWrap: "wrap"}}>
                <SubSection horizontal style={{width: "calc(600px - 2rem)"}}>
                    <img src="./imgs/gain-insights.png" alt="placeholder" style={{width: "340px", height: "auto", marginRight: "1rem"}} />
                </SubSection>
                <SubSection vertical style={{width: "540px", minWidth: "300px", textAlign: isNarrowView ? "center" : "left"}}>
                    <h3>Gain insights</h3>
                    <p>Leverage our powerful reporting to easily share customized data visualizations and actionable insights to boost your ROI.</p>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: isNarrowView ? "center" : "left", alignItems: "center", padding: isNarrowView ? "1.3rem 0 0 0" : "1.3rem 0"}}>
                        <button className="App__top btn-primary">Learn more</button>
                    </div>
                </SubSection>
            </SubSection>
            <SubSection horizontal style={{padding: "20px 0", flexWrap: "wrap-reverse"}}>
                <SubSection vertical style={{width: "540px", minWidth: "300px", textAlign: isNarrowView ? "center" : "left"}}>
                    <h3>Grow strategically</h3>
                    <p>Experience tangible growth. Scale your business and your profits with ad performance automation, budget optimization, and more.</p>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: isNarrowView ? "center" : "left", alignItems: "center", padding: isNarrowView ? "1.3rem 0 0 0" : "1.3rem 0"}}>
                        <button className="App__top btn-primary">Learn more</button>
                    </div>
                </SubSection>
                <SubSection horizontal style={{width: "calc(600px - 2rem)"}}>
                    <img src="./imgs/celebrate.png" alt="placeholder" style={{width: "340px", height: "auto", marginLeft: "1rem"}} />
                </SubSection>
            </SubSection>
        </PageSection>
    )
}

export default IncentivesSection;