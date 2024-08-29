import { Page } from 'ppc';
import { Header } from './components';
import { LongShadowSection, IncentivesSection, ProductSection, ResourcesSection, FooterSection } from './sections';
import './FEExLandingPage.css';

function AdjustLandingPage() {

  return (
    <Page dark vertical centerText scrollTop={68} maxWidth="min(1120px, 90vw)" bgColorSet={["#fff", "#f07167", "#fed9b7", "#fdfcdc", "#cdeac0", "#778da9"]}>
      <Header />
      <LongShadowSection />
      <IncentivesSection />
      <ProductSection />
      <ResourcesSection />
      <FooterSection />
    </Page>
  )
}

export default AdjustLandingPage
