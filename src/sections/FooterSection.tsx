import { PageSection, SubSection } from '../components';

export const Footer = () => {
    return ( 
      <div className="footer">
        <span>(2024, Anas Bouzid) Illustrations by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a></span>
        <a href="#">SECURITY ADVISORIES</a>
        <a href="#">PRIVACY NOTICE</a>
        <a href="#">TERMS OF USE</a>
        <a href="#">CONTACT</a>
      </div>
    )
}

const FooterSection = () => {

    //Footer section with 4 rows of links in a PageSection
    return (
      <PageSection vertical centerText className="section__footer" maxWidth="min(1120px, 90vw)" bgColor="#04182B" padding="2rem 0" gap="4rem" style={{padding: "55px 0 0 0", width: "100%"}}>
        <SubSection horizontal style={{padding: "20px 0", flexWrap: "wrap", gap: "2.4rem", alignItems: "center", width: "100%"}}>
          <SubSection vertical style={{flex: "1 0 120px", minWidth: "70px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignSelf: "start", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
            <h6 style={{color: "var(--secondary-light-color)"}}>SITE</h6>
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Solutions</a>
          </SubSection>
          <SubSection vertical style={{flex: "1 0 120px", minWidth: "70px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignSelf: "start", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
            <h6 style={{color: "var(--secondary-light-color)"}}>RESOURCES</h6>
            <a href="#">Forum</a>
            <a href="#">Blog</a>
            <a href="#">Documentation</a>
            <a href="#">Support</a>
          </SubSection>
          <SubSection vertical style={{flex: "1 0 120px", minWidth: "70px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignSelf: "start", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
            <h6 style={{color: "var(--secondary-light-color)"}}>COMPANY</h6>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Newsroom</a>
          </SubSection>
          <SubSection vertical style={{flex: "1 0 120px", minWidth: "70px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignSelf: "end", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
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

  export default FooterSection;