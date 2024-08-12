import { PageSection, SubSection } from '../components';
import { useIsMobileWidth } from '../hooks';

const Incentive = ({title, description, img, alt, isNarrow, isRight = false}: {title: string, description: string, img: string, alt: string, isNarrow: boolean, isRight?: boolean}) => {
    return (
        <SubSection horizontal style={{padding: "20px 0", flexWrap: "wrap-reverse", flexDirection: isRight ? "row-reverse" : "row"}}>
            <SubSection vertical style={{width: "540px", minWidth: "300px", textAlign: isNarrow ? "center" : "left"}}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: isNarrow ? "center" : "left", alignItems: "center", padding: isNarrow ? "1.3rem 0 0 0" : "1.3rem 0"}}>
                    <button className="App__top btn-primary">Learn more</button>
                </div>
            </SubSection>
            <SubSection horizontal style={{width: "calc(600px - 2rem)"}}>
                <img src={img} alt={alt} style={{width: "340px", height: "auto", marginLeft: isRight ? "1rem" : undefined, marginRight: isRight ? undefined : "1rem"}} />
            </SubSection>
        </SubSection>
    )
}

const IncentivesSection = () => {
    const isNarrowView = useIsMobileWidth(1245);
  
    return (
        <PageSection vertical light centerText id="incentives" maxWidth="min(1120px, 90vw)" bgColor="#ffffff" padding="2rem 0" gap="0.75rem" style={{padding: "45px 0"}}>
            <SubSection vertical style={{maxWidth: 800, margin: "0 2rem"}}>
                <h2>Everything you need in one measurement and analytics suite</h2>
                <p style={{fontSize: "21px"}}>Unlock attribution data, optimize ad performance, and leverage the reporting and insights you need to meet business goals and scale efficiently.</p>
            </SubSection>
            <Incentive title="Maximize impact" description="Don’t just measure data, measure impact. Drive fast results with accurate, real-time measurement data to meet and exceed your KPIs across channels." img="./imgs/idea-bulb.png" alt="placeholder" isNarrow={isNarrowView} />
            <Incentive title="Gain insights" description="Leverage our powerful reporting to easily share customized data visualizations and actionable insights to boost your ROI." img="./imgs/gain-insights.png" alt="placeholder" isNarrow={isNarrowView} isRight />
            <Incentive title="Grow strategically" description="Experience tangible growth. Scale your business and your profits with ad performance automation, budget optimization, and more." img="./imgs/celebrate.png" alt="placeholder" isNarrow={isNarrowView} />
        </PageSection>
    )
}

export default IncentivesSection;