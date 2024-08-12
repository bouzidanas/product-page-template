import { PageSection, SubSection } from '../../components';

const LinkList = ({title, links}: {title: string, links: string[]}) => {
    return (
        <SubSection vertical style={{flex: "1 0 120px", minWidth: "70px", maxWidth: "calc(670px - 2rem)", flexWrap: "nowrap", gap: "0.6rem", alignSelf: "start", alignItems: "start", justifyContent: "left", textAlign: "left"}}>
            <h6 style={{color: "var(--secondary-light-color)"}}>{title}</h6>
            {links.map((link) => <a key={link} href="#">{link}</a>)}
        </SubSection>
    )
}

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
        <PageSection className="section__footer" bgColor="#04182B" padding="2rem 0" gap="4rem" style={{padding: "55px 0 0 0", width: "100%"}}>
            <SubSection horizontal style={{padding: "20px 0", flexWrap: "wrap", gap: "2.4rem", alignItems: "center", width: "100%"}}>
                <LinkList title="SITE" links={["Home", "Pricing", "Solutions"]} />
                <LinkList title="RESOURCES" links={["Forum", "Blog", "Documentation", "Support"]} />
                <LinkList title="COMPANY" links={["About", "Careers", "Newsroom"]} />
                <LinkList title="SOCIAL" links={["Twitter/X", "LinkedIn", "Facebook", "Instagram", "YouTube"]} />
            </SubSection>
            <Footer />
        </PageSection>
    )
  }

  export default FooterSection;