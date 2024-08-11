import { useEffect, useState } from 'react';
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { FaBars, FaXmark } from "react-icons/fa6";
import PageSection from './PageSection';
import SubSection from './SubSection';
import './AdjustLandingPage.css';

const ScrollTo = ({dest, onClick=()=>{}, children}: {dest: string, onClick?: ()=>void, children: React.ReactNode}) => {
  return (
    <a onClick={()=>{document.getElementById(dest)?.scrollIntoView({behavior: 'smooth'}); onClick()}}>{children}</a>
  )
}

const Header = () => {
  const [positionToTop, setPositionToTop] = useState(false);
  const [mobileMode, setMobileMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const HPageOptions = () =>
  <>
    <ScrollTo dest='products' onClick={()=>setShowMenu(false)}>Products</ScrollTo>
    <ScrollTo dest='incentives' onClick={()=>setShowMenu(false)}>Solutions</ScrollTo>
    <a href="#" onClick={()=>setShowMenu(false)}>Pricing</a>
    <ScrollTo dest='resources' onClick={()=>setShowMenu(false)}>Resources</ScrollTo>
  </>

  useEffect(() => {
    const handleScroll = () => {
      setPositionToTop(window.scrollY > 75);
    };
    const onResize = () => {
      setMobileMode(window.innerWidth <= 752);
    }
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return ( 
    <>
      <PageSection vertical centerText light={positionToTop} className={"page__nav " + (positionToTop ? "latch-top" : "")} height="100px" maxWidth="1120px" bgColor={positionToTop ? "#fff" : "#04182B"} style={{padding: "22px 0"}}>
        <SubSection horizontal className='header' style={{width: "min(1400px, 90vw)", gap: "2rem", alignItems: "center", justifyContent: "space-between", fontWeight: "500"}}>
          <SubSection horizontal className="left">
            <a href="#"><span style={{fontSize: "240%"}}>PLPT</span></a>
            {mobileMode || <HPageOptions />}
          </SubSection>
          {mobileMode 
            ? <SubSection horizontal className="right">
                <FaBars size={32} onClick={()=>setShowMenu(true)}/>
              </SubSection>
            : <SubSection horizontal className="right">
                <a href="#">Login</a>
                <button className="App__top btn-primary">Sign up</button>
              </SubSection>
          }
        </SubSection>
      </PageSection>
      {mobileMode && showMenu && 
        <PageSection vertical centerText light className="page__nav mobile latch-top"  height="100dvh" maxWidth="1120px" bgColor= "#fff" style={{padding: "22px 0", justifyContent: "start", height: "100%"}}>
          <SubSection vertical className='header' style={{width: "min(1400px, 90vw)", gap: "0rem", alignItems: "start"}}>
            <SubSection horizontal style={{width: "100%",justifyContent: "space-between"}}>
              <a href="#"><span style={{fontSize: "240%"}}>PLPT</span></a>
              <FaXmark size={32} onClick={()=>setShowMenu(false)}/>
            </SubSection>
            <HPageOptions />
            <SubSection horizontal style={{alignSelf: "center", gap: "2rem"}}>
              <a href="#">Login</a>
              <button className="App__top btn-primary">Sign up</button>
            </SubSection>
          </SubSection>
        </PageSection>
      }
  </>
  )
}

const Footer = () => {
  return ( 
    <div className="footer">
      <span>(2024) Product Landing Page Template by Anas Bouzid</span>
      <a href="#">SECURITY ADVISORIES</a>
      <a href="#">PRIVACY NOTICE</a>
      <a href="#">TERMS OF USE</a>
      <a href="#">CONTACT</a>
    </div>
  )
}

const IntroSection = () => {
  return (
    <PageSection vertical centerText maxWidth="1120px" bgColor="#04182B" padding="6.25rem 0 2rem 0" style={{padding: "40px 0", maxWidth: 700, margin: "0 2rem"}}>
      <h1>Accelerate your app's growth</h1>
      <p>Your end-to-end solution for every stage of the app marketing journey. Measure, optimize, and scale app growth across platforms.</p>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "0.5rem", padding: "1rem 0"}}>
        <button className="App__top btn-primary">Request a demo</button>
        <button className="App__top btn-secondary">Learn more</button>
      </div>
    </PageSection>
  )
}

const ImageTransitionSection = () => {
  return (
    <PageSection maxWidth="1120px" bgColor={["33%", "#04182B", "#ffffff"]}>
      <img src="./imgs/dashboard-app.png" alt="placeholder" style={{width: "85%", height: "auto", borderRadius: "0.7rem"}} />
    </PageSection>
  )
}

const IncentivesSection = () => {
  return (
    <PageSection vertical light centerText id="incentives" maxWidth="1120px" bgColor="#ffffff" padding="2rem 0" gap="0.75rem" style={{padding: "45px 0"}}>
      <SubSection vertical style={{maxWidth: 800, margin: "0 2rem"}}>
          <h2>Everything you need in one measurement and analytics suite</h2>
          <p style={{fontSize: "21px"}}>Unlock attribution data, optimize ad performance, and leverage the reporting and insights you need to meet business goals and scale efficiently.</p>
      </SubSection>
      <SubSection horizontal style={{width: "min(1400px, 90vw)", padding: "20px 0", flexWrap: "wrap-reverse"}}>
        <SubSection vertical style={{width: "540px", minWidth: "300px", textAlign: "left"}}>
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
      <SubSection horizontal style={{width: "min(1400px, 90vw)", padding: "20px 0", flexWrap: "wrap"}}>
        <SubSection horizontal style={{width: "calc(600px - 2rem)"}}>
          <img src="./imgs/gain-insights.png" alt="placeholder" style={{width: "340px", height: "auto", marginRight: "1rem"}} />
        </SubSection>
        <SubSection vertical style={{width: "540px", minWidth: "300px", textAlign: "left"}}>
          <h3>Gain insights</h3>
          <p>Leverage our powerful reporting to easily share customized data visualizations and actionable insights to boost your ROI.</p>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "left", alignItems: "center", padding: "1.3rem 0"}}>
            <button className="App__top btn-primary">Learn more</button>
          </div>
        </SubSection>
      </SubSection>
      <SubSection horizontal style={{width: "min(1400px, 90vw)", padding: "20px 0", flexWrap: "wrap-reverse"}}>
        <SubSection vertical style={{width: "540px", minWidth: "300px", textAlign: "left"}}>
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
  )
}

const ProductSection = () => {
  return (
    <PageSection vertical id="products" maxWidth="1120px" bgColor="#04182B" padding="5rem 0" >
      <SubSection horizontal style={{width: "min(1400px, 90vw)", padding: "20px 0", flexWrap: "wrap-reverse", gap: "2.6rem"}}>
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
      <SubSection horizontal style={{width: "min(1400px, 90vw)", padding: "20px 0", flexWrap: "wrap", gap: "1.5rem", alignItems: "start"}}>
        <SubSection horizontal style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "1rem", alignItems: "start", justifyContent: "left"}}>
          <HiOutlineCheckCircle color='#ff5454' size={80} style={{marginLeft: "-0.2em", marginTop: "-1.3rem"}}/>
          <SubSection vertical style={{textAlign: "left", gap: "0.6rem"}}>
            <h4>Embrace scripting</h4>
            <p>Build an app in a few lines of code with our magically simple API. </p>
          </SubSection>
        </SubSection>
        <SubSection horizontal style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "1rem", alignItems: "start", justifyContent: "left"}}>
          <HiOutlineCheckCircle color='#ff5454' size={80} style={{marginLeft: "-0.2em", marginTop: "-1.3rem"}}/>
          <SubSection vertical style={{textAlign: "left", gap: "0.6rem"}}>
            <h4>Embrace scripting</h4>
            <p>Build an app in a few lines of code with our magically simple API. </p>
          </SubSection>
        </SubSection>
        <SubSection horizontal style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "1rem", alignItems: "start", justifyContent: "left"}}>
          <HiOutlineCheckCircle color='#ff5454' size={80} style={{marginLeft: "-0.2em", marginTop: "-1.3rem"}}/>
          <SubSection vertical style={{textAlign: "left", gap: "0.6rem"}}>
            <h4>Embrace scripting</h4>
            <p>Build an app in a few lines of code with our magically simple API. </p>
          </SubSection>
        </SubSection>
      </SubSection>
    </PageSection>
  )
}

const ResourcesSection = () => {
  return (
    <PageSection vertical light centerText id='resources' maxWidth="1120px" bgColor="#e6eef2" padding="2rem 0" gap="0.75rem" style={{padding: "45px 0"}}>
      <h5 style={{color: "var(--secondary-dark-color)"}}>LEARN FROM OUT EXPERTS</h5>
      <h2>Whats new at Streamlit?</h2>
      <SubSection horizontal style={{width: "min(1400px, 90vw)", padding: "20px 0", flexWrap: "wrap", gap: "1.5rem", alignItems: "start"}}>
        <SubSection vertical style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
          <div style={{display: "flex", height: "340px", width: "100%", alignItems: "end", justifyContent: "center"}}>
            <img src="./imgs/mobile.png" alt="placeholder" style={{width: "auto", height: "100%"}} />
          </div>
          <p style={{fontWeight: 300, fontSize: "85%", marginBottom: "8px"}}>EBOOK</p>
          <h4 style={{fontWeight: "500"}}>Mobile app trends: 2024 edition</h4>
          <p>Get first dibs on exclusive, actionable data, expert insights on AI and personalization, and the keys to supercharged app growth.</p>
        </SubSection>
        <SubSection vertical style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
          <div style={{display: "flex", height: "340px", width: "100%", alignItems: "end", justifyContent: "center"}}>
            <img src="./imgs/web-dev.png" alt="placeholder" style={{width: "100%", height: "auto", maxHeight: "100%"}} />
          </div>
          <p style={{fontWeight: 300, fontSize: "85%", marginBottom: "8px"}}>ARTICLE</p>
          <h4 style={{fontWeight: "500"}}>Just build it</h4>
          <p>We don’t want anything to distract you from forward progress. We try our hardest to provide a framework that abstracts away all sorts of engineering details so you can focus on putting the power of data at the fingertips of your stakeholders.</p>
        </SubSection>
        <SubSection vertical style={{flex: "1 0 346px", minWidth: "320px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
          <div style={{display: "flex", height: "340px", alignItems: "end", justifyContent: "center"}}>
            <img src="./imgs/analysis.png" alt="placeholder" style={{width: "100%", height: "auto", transform: "rotate3d(1, 0, 0, 58deg)", marginBottom: "-2.5rem"}} />
          </div>
          <p style={{fontWeight: 300, fontSize: "85%", marginBottom: "8px"}}>EBOOK</p>
          <h4 style={{fontWeight: "500"}}>The finance app insights report</h4>
          <p>Propel your finance app UA to new heights with data, insights, and expert analysis. Deep-dive into the fastest-growing regions and verticals in the industry.</p>
        </SubSection>
      </SubSection>
    </PageSection>
  )
}

const FooterSection = () => {

  //Footer section with 4 rows of links in a PageSection
  return (
    <PageSection vertical centerText className="section__footer" maxWidth="1120px" bgColor="#04182B" padding="2rem 0" gap="0.75rem" style={{padding: "45px 0 0 0"}}>
      <SubSection horizontal style={{width: "min(1400px, 90vw)", padding: "20px 0", flexWrap: "wrap", gap: "1.5rem", alignItems: "center"}}>
        <SubSection vertical style={{flex: "1 0 160px", minWidth: "70px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignSelf: "start", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
          <h6 style={{color: "var(--secondary-light-color)"}}>SITE</h6>
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Solutions</a>
        </SubSection>
        <SubSection vertical style={{flex: "1 0 160px", minWidth: "70px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignItems: "start", justifyContent: "left", textAlign: "left", marginRight: "3rem"}}>
          <h6 style={{color: "var(--secondary-light-color)"}}>RESOURCES</h6>
          <a href="#">Forum</a>
          <a href="#">Blog</a>
          <a href="#">Documentation</a>
          <a href="#">Support</a>
        </SubSection>
        <SubSection vertical style={{flex: "1 0 160px", minWidth: "70px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
          <h6 style={{color: "var(--secondary-light-color)"}}>COMPANY</h6>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Newsroom</a>
        </SubSection>
        <SubSection vertical style={{flex: "1 0 160px", minWidth: "70px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignSelf: "end", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
          <h6 style={{color: "var(--secondary-light-color)"}}>SOCIAL</h6>
          <a href="#">Twitter/X</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </SubSection>
      </SubSection>
      <Footer />
    </PageSection>
  )
}

function AdjustLandingPage() {

  return (
    <>
      <Header />
      <IntroSection />
      <ImageTransitionSection />
      <IncentivesSection />
      <ProductSection />
      <ResourcesSection />
      <FooterSection />
    </>
  )
}

export default AdjustLandingPage
