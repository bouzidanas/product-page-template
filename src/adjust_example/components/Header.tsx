import { useState } from 'react';
import { FaBars, FaXmark } from "react-icons/fa6";
import { PageSection, SubSection } from '../../components';
import { useIsMobileWidth, useScrolledPast } from '../../hooks';

// Desc: Custom anchor component that scrolls to a certain element on the page when clicked
export const ScrollTo = ({dest, onClick=()=>{}, children, ...props}: {dest: string, onClick?: ()=>void, children: React.ReactNode} & React.HTMLProps<HTMLAnchorElement>) => {
  return (
    <a onClick={()=>{document.getElementById(dest)?.scrollIntoView({behavior: 'smooth'}); onClick()}} {...props}>{children}</a>
  )
}

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const positionToTop = useScrolledPast(75);
  const mobileMode = useIsMobileWidth(752);

  const HPageOptions = () =>
  <>
    <ScrollTo dest='products' onClick={()=>setShowMenu(false)}>Products</ScrollTo>
    <ScrollTo dest='incentives' onClick={()=>setShowMenu(false)}>Solutions</ScrollTo>
    <a href="/" onClick={()=>setShowMenu(false)}>Pricing</a>
    <ScrollTo dest='resources' onClick={()=>setShowMenu(false)}>Resources</ScrollTo>
  </>

  return ( 
    <>
      <PageSection vertical centerText light={positionToTop} className={"page__nav " + (positionToTop ? "latch-top" : "")} height="100px" maxWidth="1120px" bgColor={positionToTop ? "#fff" : "#04182B"} style={{padding: "22px 0"}}>
        <SubSection horizontal className='header' style={{width: "min(1400px, 90vw)", gap: "2rem", alignItems: "center", justifyContent: "space-between", fontWeight: "500"}}>
          <SubSection horizontal className="left">
            <a href="/"><span style={{fontSize: "240%"}}>PLPT</span></a>
            {mobileMode || <HPageOptions />}
          </SubSection>
          {mobileMode 
            ? <SubSection horizontal className="right">
                <FaBars size={32} onClick={()=>setShowMenu(true)}/>
              </SubSection>
            : <SubSection horizontal className="right">
                <a href="/">Login</a>
                <button className="App__top btn-primary">Sign up</button>
              </SubSection>
          }
        </SubSection>
      </PageSection>
      {mobileMode && showMenu && 
        <PageSection vertical centerText light className="page__nav mobile latch-top"  height="100lvh" maxWidth="1120px" bgColor= "#fff" style={{justifyContent: "start", height: "100%"}}>
          <SubSection vertical className='header' style={{width: "min(1400px, 90vw)", gap: "0rem", alignItems: "start"}}>
            <SubSection horizontal style={{width: "100%",justifyContent: "space-between"}}>
              <a href="/"><span style={{fontSize: "240%"}}>PLPT</span></a>
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

export default Header;