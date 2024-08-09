import PageSection from './PageSection'
import SubSection from './SubSection'
import './App.css'

function App() {

  return (
    <>
      <PageSection vertical maxWidth="1120px" backgroundColor="#04182B" height="fit" padding="6.25rem 0 2rem 0" style={{textAlign: "center", padding: "40px 0", maxWidth: 700, margin: "0 2rem"}}>
        <h1>Accelerate your app's growth</h1>
        <p>Your end-to-end solution for every stage of the app marketing journey. Measure, optimize, and scale app growth across platforms.</p>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "1rem 0"}}>
          <button className="App__top btn-primary">Request a demo</button>
          <button className="App__top btn-secondary">Learn more</button>
        </div>
      </PageSection>
      <PageSection maxWidth="1120px" backgroundColor={["33%", "#04182B", "#ffffff"]} height="fit">
        <img src="./imgs/dashboard-app.png" alt="placeholder" style={{width: "85%", height: "auto", borderRadius: "0.7rem"}} />
      </PageSection>
      <PageSection vertical maxWidth="1120px" backgroundColor="#ffffff" height="fit" padding="2rem 0" gap="0.75rem" mode='light' style={{textAlign: "center", padding: "45px 0"}}>
        <SubSection vertical style={{maxWidth: 800, margin: "0 2rem"}}>
            <h2>Everything you need in one measurement and analytics suite</h2>
            <p style={{fontSize: "21px"}}>Unlock attribution data, optimize ad performance, and leverage the reporting and insights you need to meet business goals and scale efficiently.</p>
        </SubSection>
        <SubSection horizontal style={{width: "min(1400px, 91vw)", padding: "20px 0", flexWrap: "wrap-reverse"}}>
          <SubSection vertical style={{width: "540px", minWidth: "400px", textAlign: "left"}}>
            <h3>Maximize impact</h3>
            <p>Don’t just measure data, measure impact. Drive fast results with accurate, real-time measurement data to meet and exceed your KPIs across channels.</p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "left", alignItems: "center", padding: "1.3rem 0"}}>
              <button className="App__top btn-primary">Learn more</button>
            </div>
          </SubSection>
          <SubSection horizontal style={{width: "calc(600px - 2rem)"}}>
            <img src="./imgs/idea-bulb.png" alt="placeholder" style={{width: "340px", height: "auto", marginLeft: "1rem"}} />
          </SubSection>
        </SubSection>
        <SubSection horizontal style={{width: "min(1400px, 91vw)", padding: "20px 0", flexWrap: "wrap"}}>
          <SubSection horizontal style={{width: "calc(600px - 2rem)"}}>
            <img src="./imgs/gain-insights.png" alt="placeholder" style={{width: "340px", height: "auto", marginRight: "1rem"}} />
          </SubSection>
          <SubSection vertical style={{width: "540px", minWidth: "400px", textAlign: "left"}}>
            <h3>Gain insights</h3>
            <p>Leverage our powerful reporting to easily share customized data visualizations and actionable insights to boost your ROI.</p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "left", alignItems: "center", padding: "1.3rem 0"}}>
              <button className="App__top btn-primary">Learn more</button>
            </div>
          </SubSection>
        </SubSection>
        <SubSection horizontal style={{width: "min(1400px, 91vw)", padding: "20px 0", flexWrap: "wrap-reverse"}}>
          <SubSection vertical style={{width: "540px", minWidth: "400px", textAlign: "left"}}>
            <h3>Grow strategically</h3>
            <p>Experience tangible growth. Scale your business and your profits with ad performance automation, budget optimization, and more.</p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "left", alignItems: "center", padding: "1.3rem 0"}}>
              <button className="App__top btn-primary">Learn more</button>
            </div>
          </SubSection>
          <SubSection horizontal style={{width: "calc(600px - 2rem)"}}>
            <img src="./imgs/celebrate.png" alt="placeholder" style={{width: "340px", height: "auto", marginLeft: "1rem"}} />
          </SubSection>
        </SubSection>
      </PageSection>
      <PageSection vertical maxWidth="1120px" backgroundColor="#04182B" height="fit" padding="5rem 0" >
        <SubSection horizontal style={{width: "min(1400px, 91vw)", padding: "20px 0", flexWrap: "wrap-reverse", gap: "2.6rem"}}>
          <SubSection vertical style={{flex: "2 0 440px", minWidth: "400px", maxWidth: "calc(670px - 2rem)", textAlign: "left", gap: "0.3rem"}}>
            <SubSection horizontal style={{gap: "0.6rem", alignItems: "center", marginBottom: "1rem", justifyContent: "left"}}>
              <img src="./streamlit-logo.svg" alt="Streamlit" style={{width: "38px", height: "auto"}}/>
              <h4>Streamlit</h4>
            </SubSection>
            <h3>Build powerful apps</h3>
            <p>A faster way to build and share data apps.</p>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "left", alignItems: "center", padding: "2rem 0 0.75rem 0"}}>
              <button className="App__top btn-primary">Explore Streamlit</button>
            </div>
          </SubSection>
          <SubSection horizontal style={{width: "calc(670px - 2rem)"}}>
            <video src="./videos/streamlit.mp4" controls style={{width: "100%", height: "auto", borderRadius: "1rem"}} />
          </SubSection>
        </SubSection>
      </PageSection>
    </>
  )
}

export default App
